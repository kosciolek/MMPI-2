import styled from "@emotion/styled";
import React, { memo, ReactNode, useState } from "react";
import { usePopper } from "react-popper";
import { animated, useSpring } from "react-spring";
import { zIndex } from "../../const";
import { useClickOutside } from "../../hooks/useClickOutside";
import { $callback } from "../../hooks/utils";
import { selectContext } from "./context";
import { Option } from "./Option";

export const Select = memo(
  ({
    children,
    label,
    value = null,
    onChange,
  }: {
    children?: ReactNode;
    label?: string;
    value: any;
    onChange: (val: any) => void;
  }) => {
    const [open, setOpen] = useState(false);
    const [displayNode, setDisplayNode] = useState(null);

    const set = (val: any, close = true) => {
      onChange(val);
      if (close) setOpen(false);
    };

    const [rootElem, setRootElem] = useState<HTMLElement | null>(null);

    const [side, setSide] = useState("top");
    const [getPopperSide] = useState(
      () =>
        ({
          name: "topLogger",
          enabled: true,
          phase: "main",
          fn({ state }: any) {
            if (state.placement === "top") {
              setSide("bottom");
            } else setSide("top");
          },
        } as const)
    );

    const [popperElem, setPopperElem] = useState<HTMLElement | null>(null);
    const { styles, attributes } = usePopper(rootElem, popperElem, {
      modifiers: [getPopperSide],
    });

    const spring = useSpring({
      ...(open
        ? ({ skew: 0, opacity: 1, pointerEvents: "all" } as const)
        : ({ skew: 4, opacity: 0, pointerEvents: "none" } as const)),
      config: {
        tension: 1300,
        friction: 70,
      },
    });

    useClickOutside(
      [{ current: popperElem }, { current: rootElem }],
      $callback(() => {
        if (open) setOpen(false);
      }, [open])
    );

    return (
      <Root>
        {label && <Label>{label}</Label>}
        <Base onClick={() => setOpen((prev) => !prev)} ref={setRootElem}>
          <Option>{displayNode ?? value ?? "Empty"}</Option>
        </Base>
        <Menu
          ref={setPopperElem}
          style={{
            ...styles.popper,
            ...spring,
            transformOrigin: `${side} center`,
          }}
          {...attributes.popper}
        >
          <selectContext.Provider
            value={{
              value,
              setValue: set,
              displayNode,
              setDisplayNode,
            }}
          >
            {children}
          </selectContext.Provider>
        </Menu>
      </Root>
    );
  }
);

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Base = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 220px;
  user-select: none;
  border: 1px solid ${(p) => p.theme.colors.primary100};

  transition: background-color 200ms;
  &:hover {
    background-color: ${(p) => p.theme.colors.primary50};
  }
`;
export const Menu = styled(animated.div)`
  background-color: #ffffff;
  padding: 8px 0;
  width: 220px;
  max-width: 300px;
  box-shadow: 0px 2px 3px 1px ${(p) => p.theme.colors.primary50};
  z-index: ${zIndex.selectPopup};
  position: relative;
`;
export const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 4px;
  color: ${(p) => p.theme.colors.primary};
`;
