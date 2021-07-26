import styled from "@emotion/styled";
import { media } from "../../../../hooks/media";
import { ReactComponent as WheelSvg } from "./pagination-wheel.svg";

export const Wheel = () => (
  <Root>
    <Text>SHIFT</Text>
    <Text>+</Text>
    <Icon />
  </Root>
);

export const Root = styled.div`
  ${media.md} {
    display: flex;
  }
  display: none;
  align-items: center;
  & > * + * {
    margin-left: 4px;
  }
`;
export const Text = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.primary};
  text-transform: uppercase;
`;
export const Icon = styled(WheelSvg)`
  height: 24px;
  width: 24px;
  fill: ${(p) => p.theme.colors.primary};
`;
