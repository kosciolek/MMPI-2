import { RefObject, useEffect } from "react";
import { useLatest } from "./useLatest";

export const useClickOutside = (
  ignoredRefs: RefObject<HTMLElement>[],
  callback: (e: MouseEvent) => void
) => {
  const ignoredRefsRef = useLatest(ignoredRefs);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        !ignoredRefsRef.current.some((ignored) =>
          ignored.current?.contains(e.target as HTMLElement)
        )
      ) {
        callback(e);
      }
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [callback]);
};
