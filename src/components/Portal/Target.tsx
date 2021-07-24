import { useContext, useLayoutEffect } from "react";
import { useRerender } from "../../hooks/useRerender";
import { PortalContext } from "./PortalContextProvider";

export const PortalTarget = ({ id }: { id: string }) => {
  const rerender = useRerender();
  const { emitter, childrenRef } = useContext(PortalContext);
  useLayoutEffect(() => {
    if (!emitter) return () => {};
    const listener = (rerenderRequestedId: string) => {
      if (id === rerenderRequestedId) rerender();
    };
    emitter.on("new-children", listener);
    return () => emitter.off("new-children", listener);
  }, [emitter, rerender, id]);

  const children = childrenRef.current[id] ?? null;

  return <>{children}</>;
};
