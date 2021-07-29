import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ignoredRefs: RefObject<HTMLElement>[],
  callback: (e: MouseEvent) => void,
  enabled = true
) => {
  useEffect(() => {
    if (!enabled) return () => {};
    const listener = (e: MouseEvent) => {
      if (!ignoredRefs.some((ignored) => ignored.current?.contains(e.target as HTMLElement))) {
        callback(e);
      }
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [callback, enabled, ignoredRefs]);
};
