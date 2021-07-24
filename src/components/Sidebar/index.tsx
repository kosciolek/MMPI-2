import styled from "@emotion/styled";
import { FC } from "react";
import { PortalSource } from "../Portal/Source";

export const Sidebar: FC = ({ children }) => {
  return (
    <Root>
      {children}
      <PortalSource id="global-menu">{children}</PortalSource>
    </Root>
  );
};

export const Root = styled.div`
  padding: 24px;
  display: flex;
  height: 100%;
  flex-direction: column;
  min-width: 300px;
  & > * + * {
    margin-top: 8px;
  }
`;
