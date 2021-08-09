import styled from "@emotion/styled";
import { FC } from "react";
import { Menu } from "../Menu";
import { Wave } from "./Wave";

export const Layout: FC = ({ children }) => (
  <Root>
    <Menu />
    <Content>{children}</Content>
    <Wave />
  </Root>
);

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
