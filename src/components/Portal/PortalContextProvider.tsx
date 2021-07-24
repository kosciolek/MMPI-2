import mitt, { Emitter } from "mitt";
import { createContext, ReactNode, useState } from "react";

export type PortalEvents = {
  "new-children": string;
};

export const PortalContext = createContext({
  childrenRef: { current: {} as Record<string, ReactNode> },
  emitter: null as null | Emitter<PortalEvents>,
});

export const PortalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value] = useState(() => ({
    childrenRef: { current: {} },
    emitter: mitt<PortalEvents>(),
  }));
  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
};
