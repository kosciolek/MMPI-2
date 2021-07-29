import { ReactNode, useContext, useLayoutEffect } from "react";
import { PortalContext } from "./PortalContextProvider";

export const PortalSource = ({ children, id }: { children?: ReactNode; id: string }) => {
  const { childrenRef, emitter } = useContext(PortalContext);

  useLayoutEffect(() => {
    if (!emitter) return () => {};

    emitter.emit("new-children", id);
    childrenRef.current[id] = children;
    return () => delete childrenRef.current[id];
  }, [children, emitter, childrenRef, id]);
  return null;
};
