import styled from "@emotion/styled";
import { forwardRef, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { media } from "../../../../hooks/media";
import { useBodyLock } from "../../../../hooks/useBodyLock";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { $callback } from "../../../../hooks/utils";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { uiSlice } from "../../../../redux/ui";
import { PortalTarget } from "../../../Portal/Target";
import { LanguageMenu } from "../LanguageMenu";
import { MobileIcon } from "../MobileIcon";

export const MobileMenu = () => {
  const _mobileOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const isLg = media.useLg();
  const mobileOpen = _mobileOpen && !isLg;
  const dispatch = useAppDispatch();

  const rootRef = useRef<HTMLDivElement | null>(null);
  /*useClickOutside(
    [rootRef],
    $callback(() => {
      console.log("outside", mobileOpen);
      if (mobileOpen) dispatch(uiSlice.actions.setMobileMenuOpen(false));
    }, [mobileOpen])
  );*/
  console.log('menu render')

  useEffect(() => {
    const listener = () => {
      console.log("outside", mobileOpen);
      if (mobileOpen) dispatch(uiSlice.actions.setMobileMenuOpen(false));
    };
    console.log("rebinding", mobileOpen);
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [mobileOpen]);

  const transition = useTransition(mobileOpen, {
    from: { opacity: 0, transform: "translateX(-24px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-24px)" },
    config: {
      mass: 0.5,
      tension: 1300,
      friction: 60,
    },
  });

  useBodyLock(mobileOpen);

  return (
    <>
      {transition(
        (styles, isOpen) =>
          isOpen && (
            <Root style={styles} ref={rootRef}>
              <IconContainer>
                <MobileIcon />
              </IconContainer>
              <Items>
                <PortalTarget id="global-menu" />
              </Items>
              <LanguageMenuWrapper>
                <LanguageMenu />
              </LanguageMenuWrapper>
            </Root>
          )
      )}
    </>
  );
};

export const Root = styled(animated.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  left: 0;
  width: 400px;
  max-width: 90vw;
  border-right: 1px solid ${(p) => p.theme.colors.primary100};
  background-color: white;
  box-shadow: 0 4px 4px #00000029;
  z-index: 5;
  display: flex;
  flex-direction: column;
`;
export const IconContainer = styled.div`
  height: 80px;
  padding-left: 24px;
  display: flex;
  align-items: center;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex-grow: 1;
  & > * + * {
    margin-top: 16px;
  }
`;
export const LanguageMenuWrapper = styled.div`
  justify-content: flex-end;
  margin-top: auto;
  display: flex;
  padding: 16px;
`;
