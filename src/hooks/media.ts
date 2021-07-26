import { useLayoutEffect, useState } from "react";
import { firstToUppercase } from "../utils/js";

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

export type Breakpoints = typeof breakpoints;
export type BreakpointKeys = keyof Breakpoints;
export type QueryObject<T extends "max" | "min"> = {
  [K in BreakpointKeys]: `@media screen and (${T}-width: ${typeof breakpoints[K]})`;
} &
  {
    [K in BreakpointKeys as `use${Capitalize<K>}`]: () => boolean;
  } & {
    useQuery: (width: number) => boolean;
  };

export const useQuery = (width: number, type: "min" | "max") => {
  const [matches, setMatches] = useState(true);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(
      `screen and (${type}-width: ${width}px)`
    );
    setMatches(mediaQuery.matches);
    const listener = (ev: any) => setMatches(ev.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [type, width]);

  return matches;
};

const makeQueryObject = <T extends "max" | "min">(type: T) =>
  Object.entries(breakpoints).reduce((acc, [breakpoint, value]) => {
    acc[breakpoint] = `@media screen and (${type}-width: ${value}px)`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[`use${firstToUppercase(breakpoint)}`] = () => useQuery(value, type);
    return acc;
  }, {} as any) as QueryObject<T>;

export type Query = (<T extends number>(
  minWidth: T
) => `@media screen and (min-width: ${T}px)`) & {
  down: (<T extends number>(
    maxWidth: T
  ) => `@media screen and (max-width: ${T}px)`) &
    QueryObject<"max">;
} & QueryObject<"min">;

/* Min func */
export const media: Query = (<T extends number>(minWidth: T) =>
  `@media screen and (min-width: ${minWidth}px)`) as any;
/* Max breakpoint funcs & hooks */
Object.assign(media, makeQueryObject("min"));
/* Min any hook */
// eslint-disable-next-line react-hooks/rules-of-hooks
media.useQuery = (minWidth: number) => useQuery(minWidth, "min");
/* Max func */
media.down = (<T extends number>(minWidth: T) =>
  `@media screen and (min-width: ${minWidth}px)`) as any;
/* Max breakpoint funcs & hooks */
Object.assign(media.down, makeQueryObject("max"));
/* Max any hook */
// eslint-disable-next-line react-hooks/rules-of-hooks
media.down.useQuery = (minWidth: number) => useQuery(minWidth, "max");

export function makeSubquery(
  breakpointOrWidth: BreakpointKeys | number,
  type: "max" | "min" = "min"
): { useQuery: () => boolean; query: string } {
  const source = type === "min" ? media : media.down;
  return typeof breakpointOrWidth === "string"
    ? {
        useQuery: source[
          `use${firstToUppercase(breakpointOrWidth)}` as keyof typeof source
        ] as () => boolean,
        query: source[breakpointOrWidth],
      }
    : {
        useQuery: () => source.useQuery(breakpointOrWidth as number),
        query: source(breakpointOrWidth as number),
      };
}
