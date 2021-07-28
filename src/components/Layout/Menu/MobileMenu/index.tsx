import styled from "@emotion/styled";
import { useRef } from "react";
import { useTransition, animated } from "react-spring";
import { media } from "../../../../hooks/media";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { $callback } from "../../../../hooks/utils";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { uiSlice } from "../../../../redux/ui";
import { PortalTarget } from "../../../Portal/Target";
import { LanguageMenu } from "../LanguageMenu";

export const MobileMenu = () => {
  const _open = useAppSelector((state) => state.ui.mobileMenuOpen);
  const isLg = media.useLg();
  const open = _open && !isLg;

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

  /* Close menu on click outside. */
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  useClickOutside(
    [rootRef],
    $callback(() => {
      if (open) dispatch(uiSlice.actions.setMobileMenuOpen(!open));
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
  position: absolute;
  border-top: 1px solid ${(p) => p.theme.colors.primary100};
  top: 100%;
  left: 0;
  right: 0;
  min-height: 300px;
  background-color: white;
  box-shadow: 0 4px 4px #00000029;
  z-index: 5;
  display: flex;
  flex-direction: column;
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
