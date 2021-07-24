import styled from "@emotion/styled";
import React from "react";
import { useSpring, animated, config } from "react-spring";
import { ReactComponent as MenuSvg } from "./menu-mobile.svg";

export const MobileIcon = ({
  open,
  onChange,
}: {
  open: boolean;
  onChange: (newState: boolean, e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const spring = useSpring({
    ...(open ? { rotate: 180 } : { rotate: 90 }),
    config: config.stiff,
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    onChange(!open, e);
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
