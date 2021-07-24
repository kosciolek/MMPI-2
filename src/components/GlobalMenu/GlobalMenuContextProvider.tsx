import mitt, { Emitter } from "mitt";
import { createContext, ReactNode, useState } from "react";

export type GlobalMenuEvents = {
  "new-children": undefined;
};

export const globalMenuContext = createContext({
  childrenRef: { current: null as ReactNode },
  emitter: null as null | Emitter<GlobalMenuEvents>,
});

export const GlobalMenuContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value] = useState(() => ({
    childrenRef: { current: null },
    emitter: mitt<GlobalMenuEvents>(),
  }));
  return (
    <globalMenuContext.Provider value={value}>
      {children}
    </globalMenuContext.Provider>
  );
};
