import { RefObject, useEffect } from "react";
import { useWindowEvent } from "./useWindowEvent";
import { $callback } from "./utils";

export const useClickOutside = (
  ignoredRefs: RefObject<HTMLElement>[],
  callback: (e: MouseEvent) => void
) => {
  useWindowEvent(
    "click",
    $callback(
      (e: MouseEvent) => {
        if (!ignoredRefs.some((ignored) => ignored.current?.contains(e.target as HTMLElement))) {
          callback(e);
        }
      },
      [callback, ignoredRefs]
    )
  );
};
