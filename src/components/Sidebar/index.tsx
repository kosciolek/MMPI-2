import styled from "@emotion/styled";
import { FC } from "react";
import { media } from "../../hooks/media";
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
  display: none;
  ${media.lg} {
    display: flex;
  }

  grid-area: sidebar;
  padding: 24px;
  height: 100%;
  flex-direction: column;
  max-width: 500px;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};

  & > * + * {
    margin-top: 8px;
  }
`;
