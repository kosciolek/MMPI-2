import { createContext, ReactNode } from "react";

export const selectContext = createContext({
  value: null,
  setValue: (() => {}) as any,
  displayNode: (() => {}) as ReactNode,
  setDisplayNode: (() => {}) as any,
});
