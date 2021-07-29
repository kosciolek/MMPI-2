import { useLayoutEffect } from "react";

/* https://github.com/kosciolek/system/blob/master/src/hooks/useBodyLock.ts */

export const SCROLL_LOCKABLE_ATTRIB = "data-scroll-lockable";
export const scrollLockable = { [SCROLL_LOCKABLE_ATTRIB]: true };

export const COMPENSATE_BODY_LOCK_CLASS = "__hidden-overflow";

export const compensateBodyLock = {
  className: COMPENSATE_BODY_LOCK_CLASS,
};

let scrollWidth: number;
let styleElem: HTMLStyleElement;

export function useBodyLock(isLocked: boolean) {
  useLayoutEffect(() => {
    if (isLocked) {
      if (scrollWidth === undefined) measureScrollbar();
      if (!styleElem) {
        styleElem = document.createElement("style");
        styleElem.innerText = makeStyles(scrollWidth);
        document.head.appendChild(styleElem);
      }

      document.body.classList.add(COMPENSATE_BODY_LOCK_CLASS);
    } else document.body.classList.remove(COMPENSATE_BODY_LOCK_CLASS);
  }, [isLocked]);
}

/* Allows to make the scrollbar measurement ahead of time */
export function measureScrollbar(force = false) {
  if (scrollWidth === undefined || force) scrollWidth = getScrollbarWidth();
}

function makeStyles(scrollbarWidth: number) {
  return [
    `body.${COMPENSATE_BODY_LOCK_CLASS} { overflow: hidden; padding-right: ${scrollbarWidth}px; }`,
    `body.${COMPENSATE_BODY_LOCK_CLASS} .${COMPENSATE_BODY_LOCK_CLASS} { padding-right: ${scrollbarWidth}px; }`,
  ].join(" ");
}

function getScrollbarWidth() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode!.removeChild(outer);

  return scrollbarWidth;
}
