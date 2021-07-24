import { ReactNode, useContext, useLayoutEffect } from "react";
import { globalMenuContext } from "./GlobalMenuContextProvider";

export const GlobalMenuPortal = ({ children }: { children: ReactNode }) => {
  const { childrenRef, emitter } = useContext(globalMenuContext);

  useLayoutEffect(() => {
    if (!emitter) return;
    emitter.emit("new-children");
    childrenRef.current = children;
  }, [children, emitter, childrenRef]);
  return null;
};
