import styled from "@emotion/styled";
import React, { ReactNode, useContext, useLayoutEffect } from "react";
import { selectContext } from "./context";

export const RawOption = ({ children, value, ...rest }: { value?: any; children?: ReactNode }) => {
  const { setValue, setDisplayNode, value: selectedValue } = useContext(selectContext);

  useLayoutEffect(() => {
    if (value === selectedValue) setDisplayNode(children);
  }, []);

  return (
    <Root
      {...rest}
      onClick={() => {
        setValue?.(value ?? null);
        setDisplayNode(children);
      }}
    >
      {children}
    </Root>
  );
};
export const Root = styled.div``;
export const Option = styled(RawOption)`
  padding: 8px;
  cursor: pointer;
  user-select: none;
  transition: background-color 140ms;
  &:hover {
    background-color: ${(p) => p.theme.colors.primary50};
  }
  position: relative;

  & + & {
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 16px;
      right: 16px;
      top: 0;
      height: 1px;
      background-color: black;
      opacity: 0.1;
    }
  }
`;
