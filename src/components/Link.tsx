import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import isPropValid from "@emotion/styled/macro";

export const Link = styled(RouterLink, {
  shouldForwardProp(propName: PropertyKey) {
    // @ts-ignore
    return isPropValid(propName) && propName !== "transparent";
  },
})<{ transparent?: boolean }>`
  display: ${(p) => (p.transparent ? "contents" : "initial")};
`;
