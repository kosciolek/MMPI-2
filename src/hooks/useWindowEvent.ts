import { useEffect } from "react";

export const useWindowEvent = <K extends keyof WindowEventMap>(
  event: K,
  listener: (e: WindowEventMap[K]) => void,
  { capture, passive, once }: AddEventListenerOptions = {}
) => {
  useEffect(() => {
    const _listener = (e: WindowEventMap[K]) => listener(e);
    window.addEventListener(event, _listener, { capture, passive, once });
    return () => window.removeEventListener(event, _listener);
  }, [event, listener, capture, passive, once]);
};
