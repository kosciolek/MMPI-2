import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ThemeColor } from "../../theme";
import { iif, variant } from "../../utils/css";

import { Props } from "../../utils/ts";

// export type PolymorphicProps<COMPONENT  extends ComponentType<{ children?: ReactNode } & any>> =

export type ButtonProps = {
  left?: ReactNode;
  right?: ReactNode;
  color?: ThemeColor;
} & Props<typeof Root>;

export const Button = ({ left, right, children, ...rest }: ButtonProps) => (
  <Root {...rest}>
    {left && <Left>{left}</Left>}
    <Label>{children}</Label>
    {right && <Right>{right}</Right>}
  </Root>
);

export const Root = styled.button<{
  variant?: "filled" | "text" | "outlined";
  size?: "big" | "medium";
  color?: ThemeColor;
  noPadding?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  padding: 8px 16px;

  ${variant("big", "size")} {
    padding: 16px 24px;
  }

  border: 2px solid transparent;
  border-radius: 6px;

  transition: background-color 140ms, transform 140ms, opacity 140ms;

  &:active {
    transform: translateY(2px);
  }

  ${variant("outlined")} {
    color: ${(p) => p.theme.colors.primary500};
    border: 2px solid ${(p) => p.theme.colors.primary500};

    &:active {
      opacity: 0.9;
    }
  }

  ${variant("text")} {
    color: ${(p) => p.theme.colors.primary500};

    &:active {
      opacity: 0.75;
    }
  }

  ${variant("filled")} {
    color: white;
    background-color: ${(p) => p.theme.colors.primary500};
    box-shadow: 1px 2px 3px 1px ${(p) => p.theme.colors.neutral700}36;

    &:hover {
      background-color: ${(p) => p.theme.colors.primary600};
    }

    &:disabled {
      background-color: ${(p) => p.theme.colors.neutral500};
      color: white;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  & {
    color: ${(p) => p.color && p.theme.colors[p.color]};
  }

  ${iif("noPadding")} {
    & {
      padding: 0;
    }
  }
`;
Root.defaultProps = {
  variant: "text",
  size: "medium",
};

// todo
export const Left = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.span`
  display: inline-flex;
  align-self: center;
`;
