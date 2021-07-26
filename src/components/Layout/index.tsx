import styled from "@emotion/styled";
import { FC } from "react";
import { Button } from "../Button";
import { Sidebar } from "../Sidebar";
import { Txt } from "../Txt";
import { OuterGrid } from "./Grid";
import { Menu } from "./Menu";
import { Wave } from "./Wave";
import { ReactComponent as CompactViewIcon } from "../../assets/compact-view.svg";

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
