import styled from "@emotion/styled";
import { forwardRef } from "react";
import { animated } from "react-spring";
import { iif } from "../../utils/css";
import { Button } from "../Button";
import { NotificationWithId } from "./types";
import { ReactComponent as CancelIcon } from "./cancel.svg";

export type NotificationProps = NotificationWithId & {
  onCancel: () => void;
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ content, title, onCancel, type }, ref) => (
    <Root ref={ref}>
      <Bar type={type} />
      <Content>
        <Head>
          <Title type={type}>{title}</Title>
          <Button noPadding onClick={onCancel}>
            <StyledCancelIcon />
          </Button>
        </Head>
        {content}
      </Content>
    </Root>
  )
);

export const Root = styled(animated.div)`
  pointer-events: all;
  padding: 12px;
  display: flex;
  background-color: white;
  border-radius: 4px;
  border: 2px solid ${(p) => p.theme.colors.primary50};
`;
export const Bar = styled.div<{ type: NotificationProps["type"] }>`
  flex-shrink: 0;
  width: 4px;
  border-radius: 1000px;
  background-color: ${(p) => p.theme.colors.primary};
  margin-right: 8px;

  ${iif("type", "error")} {
    background-color: ${(p) => p.theme.colors.error};
  }
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
export const Title = styled.div<{ type: NotificationProps["type"] }>`
  flex-grow: 1;
  color: ${(p) => p.theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;

  ${iif("type", "error")} {
    color: ${(p) => p.theme.colors.error};
  }
`;
export const Content = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 16px;
`;
export const StyledCancelIcon = styled(CancelIcon)`
  fill: ${(p) => p.theme.colors.primary};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
