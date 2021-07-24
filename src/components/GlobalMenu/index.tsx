import { useContext, useLayoutEffect } from "react";
import { useRerender } from "../../hooks/useRerender";
import { globalMenuContext } from "./GlobalMenuContextProvider";

export const GlobalMenu = () => {
  const rerender = useRerender();
  const { emitter, childrenRef } = useContext(globalMenuContext);
  useLayoutEffect(() => {
    if (!emitter) return () => {};
    emitter.on("new-children", rerender);
    return () => emitter.off("new-children", rerender);
  }, [emitter, rerender]);

  return <div>{childrenRef.current}</div>;
};
