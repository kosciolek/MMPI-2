import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import { useSpring, animated } from "react-spring";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { isDesktopLayout } from "../utils";
import { ReactComponent as MenuSvg } from "./menu-mobile.svg";

export const MobileIcon = forwardRef<HTMLButtonElement, {}>((_, ref) => {
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();
  const onClick = () => {
    console.log("icon", open);
    return dispatch(uiSlice.actions.toggleMobileMenu());
  };

  const spring = useSpring({
    ...(open ? { rotate: 180 } : { rotate: 90 }),
    config: {
      mass: 0.5,
      tension: 900,
      friction: 60,
    },
  });

  return (
    <Root ref={ref} style={spring} onClick={onClick}>
      <StyledMenuSvg />
    </Root>
  );
});

export const Root = styled(animated.button)`
  ${isDesktopLayout.query} {
    display: none;
  }

  height: 32px;
  width: 32px;
`;
export const StyledMenuSvg = styled(MenuSvg)`
  height: 100%;
  width: 100%;
`;
