import { RefObject, useEffect } from "react";
import { useLatest } from "./useLatest";

export const useClickOutside = (
  ignoredRefs: RefObject<HTMLElement>[],
  callback: (e: MouseEvent) => void,
  enabled = true
) => {
  const ignoredRefsRef = useLatest(ignoredRefs);
  useEffect(() => {
    if (!enabled) return () => {};
    const listener = (e: MouseEvent) => {
      if (
        !ignoredRefsRef.current.some((ignored) =>
          ignored.current?.contains(e.target as HTMLElement)
        )
      ) {
        callback(e);
      }
    };
    document.addEventListener("click", listener, { capture: true });
    return () => document.removeEventListener("click", listener, { capture: true });
  }, [callback, enabled]);
};
