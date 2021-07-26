import styled from "@emotion/styled";
import { ThemeColor } from "../theme";

export const Txt = styled.span<{ color?: ThemeColor }>`
  color: ${(p) => p.color && p.theme.colors[p.color]};
  
`;
