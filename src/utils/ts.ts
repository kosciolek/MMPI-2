import { ReactNode } from "react";

export type Props<T, REF extends boolean = true> = REF extends true
  ? T extends (props: infer PROPS) => ReactNode
    ? PROPS
    : never
  : T extends (props: infer PROPS) => ReactNode
  ? Omit<PROPS, "ref">
  : never;
