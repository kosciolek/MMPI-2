import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { Properties } from "csstype";
import { BreakpointKeys, breakpoints, media } from "../hooks/media";

// todo

export type ImportedProperties =
  | "display"
  | "justifyContent"
  | "justifyItems"
  | "alignItems"
  | "alignContent";

export type ResponsiveProperty<T> = T | T[];

export type BoxProps = Partial<{
  m: ResponsiveProperty<Properties["margin"]>;
  mt: ResponsiveProperty<Properties["marginTop"]>;
  mb: ResponsiveProperty<Properties["marginBottom"]>;
  mr: ResponsiveProperty<Properties["marginLeft"]>;
  ml: ResponsiveProperty<Properties["marginBottom"]>;
  mx: ResponsiveProperty<string>;
  my: ResponsiveProperty<string>;
  bg: ResponsiveProperty<Properties["backgroundColor"]>;
}> &
  {
    [prop in ImportedProperties]?: Properties[prop];
  };

const createResponsive =
  <PROPS, CSS_KEY extends string>(key: CSS_KEY, propsKey = key) =>
  (props: PROPS) => {
    const propValue = (props as any)[propsKey];

    return Array.isArray(propValue)
      ? Object.keys(breakpoints).map((bp, i) =>
          propValue[i] !== undefined && propValue[i] !== null
            ? css`
                ${media[bp as BreakpointKeys]} {
                  ${key}: ${propValue[i]};
                }
              `
            : null
        )
      : `${key}: ${propValue};`;
  };

export const Box = styled.div<BoxProps>`
  ${createResponsive("display")};
  justify-content: ${(p) => p.justifyContent};
  justify-items: ${(p) => p.justifyItems};
  align-items: ${(p) => p.alignItems};
  align-content: ${(p) => p.alignContent};
  ${createResponsive("background-color", "bg")};
`;
