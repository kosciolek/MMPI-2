import styled from "@emotion/styled";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { ReactComponent as MenuSvg } from "./menu-mobile.svg";

export const MobileIcon = () => {
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();
  const onClick = () => dispatch(uiSlice.actions.setMobileMenuOpen(!open));

  const spring = useSpring({
    ...(open ? { rotate: 180 } : { rotate: 90 }),
    config: {
      mass: 0.5,
      tension: 900,
      friction: 60,
    },
  });

  return (
    <Root style={spring} onClick={onClick}>
      <StyledMenuSvg />
    </Root>
  );
};

export const Root = styled(animated.button)`
  height: 32px;
  width: 32px;
`;
export const StyledMenuSvg = styled(MenuSvg)`
  height: 100%;
  width: 100%;
`;
