import { ReactNode } from "react";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const Sidebar = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Desktop>{children}</Desktop>
      <Mobile>{children}</Mobile>
    </>
  );
};
