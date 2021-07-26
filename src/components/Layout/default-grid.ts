import { css } from "@emotion/react";
import { isDesktopLayout } from "./utils";

export const defaultGrid = css`
  display: grid;
  grid-template: "space-left main space-right" 1fr / 1fr 1000px 1fr;

  ${isDesktopLayout.query} {
    grid-template:
      "space-left main aside space-right" 1fr / 1fr 1000px minmax(200px, 350px)
      1fr;
  }
`;
