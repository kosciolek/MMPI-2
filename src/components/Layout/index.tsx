import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Sidebar } from "../Sidebar";
import { Txt } from "../Txt";
import {
  FoldingSlot,
  Grid,
  LayoutSlot,
  NavbarLine,
  SidebarLine,
  SidebarSlot,
} from "./Grid";
import { Menu } from "./Menu";
import { Wave } from "./Wave";
import { ReactComponent as CompactViewIcon } from "../../assets/compact-view.svg";

export const Layout = ({
  children,
  sidebar,
}: {
  children?: ReactNode;
  sidebar?: ReactNode;
}) => (
  <Root>
    <Grid>
      <NavbarLine />
      <SidebarLine />
      <FoldingSlot slot="blank" />
      <Menu />
      <LayoutSlot slot="content">{children}</LayoutSlot>
      <SidebarSlot>
        <Sidebar>
          <Button left={<CompactViewIcon />} color="neutral600">
            Widok&nbsp;<Txt color="primary">kompaktowy</Txt>
          </Button>
        </Sidebar>
      </SidebarSlot>
      <LayoutSlot slot="wave">
        <Wave />
      </LayoutSlot>
    </Grid>
  </Root>
);

export const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
