import styled from "@emotion/styled";
import React, { ReactNode, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { animated, useTransition } from "react-spring";
import { zIndex } from "../../const";

export type DialogRenderFunc = (args: {
  open: () => void;
  toggle: () => void;
  close: () => void;
  set: (state: boolean) => void;
}) => ReactNode;

export type DialogProps = {
  action: DialogRenderFunc;
  content: DialogRenderFunc;
};

export const Dialog = ({ action, content }: DialogProps) => {
  const [open, setOpen] = useState(false);

  const args = useMemo(
    () => ({
      open: () => setOpen(true),
      toggle: () => setOpen((prev) => !prev),
      close: () => setOpen(false),
      set: (state: boolean) => setOpen(state),
    }),
    []
  );

  const transition = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 0.5,
      tension: 1300,
      friction: 60,
    },
  });

  const backdropRef = useRef<HTMLDivElement | null>(null);
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) args.close();
  };

  return (
    <>
      {action(args)}
      {transition(
        (style, show) =>
          show &&
          ReactDOM.createPortal(
            <Backdrop style={style} ref={backdropRef} onClick={onBackdropClick}>
              <Root>{content(args)}</Root>
            </Backdrop>,
            document.body
          )
      )}
    </>
  );
};

export const Backdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex.dialog};
  background-color: #00000022;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Root = styled.div`
  width: 500px;
  max-width: 90vw;
  padding: 24px;
  background-color: white;
  box-shadow: 0px 2px 3px 1px ${(p) => p.theme.colors.primary50}55;
  border: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const DialogTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 16px;
`;
export const DialogContent = styled.div`
  margin-bottom: 16px;
`;
export const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * + * {
    margin-left: 24px;
  }
`;
