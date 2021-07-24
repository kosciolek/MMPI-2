import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)<{ transparent?: boolean }>`
  display: ${(p) => (p.transparent ? "contents" : "initial")};
`;
