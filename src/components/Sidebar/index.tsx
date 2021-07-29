import styled from "@emotion/styled";
import { ReactNode } from "react";
import { media } from "../../hooks/media";
import { PortalSource } from "../Portal/Source";

export const Sidebar = ({ children, mobile }: { children?: ReactNode; mobile?: ReactNode }) => (
  <Root>
    {children}
    <PortalSource id="global-menu">{mobile ?? children}</PortalSource>
  </Root>
);

export const Root = styled.div`
  display: none;
  ${media.lg} {
    display: flex;
  }

  grid-area: aside;
  padding: 24px;
  height: 100%;
  flex-direction: column;
  max-width: 500px;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};

  & > * + * {
    margin-top: 16px;
  }
`;
