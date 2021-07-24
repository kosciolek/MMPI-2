import styled from "@emotion/styled";

export const slots = {
  navbarLeft: "navbarLeft",
  navbarCenter: "navbarCenter",
  navbarRight: "navbarRight",
  blank: "blank",
  content: "content",
  sidebar: "sidebar",
  wave: "wave",
  blankRight: "blankRight",
};
export const Grid = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template:
    "${slots.navbarLeft} ${slots.navbarCenter} ${slots.navbarRight} ${slots.blankRight}" 80px
    "${slots.blank} ${slots.content} ${slots.sidebar} ${slots.blankRight}" 1fr
    "${slots.wave} ${slots.wave} ${slots.wave} ${slots.wave}" auto / 1fr 1000px auto 1fr;
`;
export const LayoutSlot = styled.div<{ slot: keyof typeof slots }>`
  grid-area: ${(p) => p.slot};
`;
export const FoldingSlot = styled.div`
  overflow-x: hidden;
  grid-area: ${slots.blank};
`;
export const SidebarSlot = styled.div`
  grid-area: ${slots.sidebar};
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const NavbarLine = styled.div`
  grid-column: 1 / span 123;
  grid-row: 1;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const SidebarLine = styled.div`
  grid-column: 3;
  grid-row: 1 / span 123;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
`;
