import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { $callback } from "../../../../hooks/utils";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import { uiSlice } from "../../../../redux/ui";
import { PortalTarget } from "../../../Portal/Target";
import { LanguageMenu } from "../LanguageMenu";

export const MobileMenu = () => {
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  const transition = useTransition(open, {
    from: { opacity: 0, transform: "translateY(24px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(24px)" },
    config: {
      mass: 0.5,
      tension: 1500,
      friction: 60,
    },
  });
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  useClickOutside(
    [rootRef],
    $callback(() => {
      if (open) {
        dispatch(uiSlice.actions.setMobileMenuOpen(!open));
      }
    }, [open])
  );

  return (
    <>
      {transition(
        (styles, isOpen) =>
          isOpen && (
            <Root style={styles} ref={rootRef}>
              <Items>
                <PortalTarget id="global-menu" />
                <LanguageMenu />
              </Items>
            </Root>
          )
      )}
    </>
  );
};

export const Root = styled(animated.div)`
  position: absolute;
  border-top: 1px solid ${(p) => p.theme.colors.primary100};
  top: 100%;
  left: 0;
  right: 0;
  height: 300px;
  background-color: white;
  box-shadow: 0 4px 4px #00000029;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  align-items: center;
  & > * + * {
    margin-top: 8px;
  }
`;
