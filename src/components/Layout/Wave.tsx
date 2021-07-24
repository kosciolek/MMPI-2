import styled from "@emotion/styled";
import { ReactComponent as WaveSvg } from "./wave.svg";

export const Wave = () => (
  <Root>
    <StyledWaveSvg />
    <Space />
  </Root>
);

export const Root = styled.div`
  fill: ${(p) => p.theme.colors.primary};
  overflow-x: hidden;
`;

// @ts-ignore
export const StyledWaveSvg = styled(WaveSvg)`
  display: block;
`;

export const Space = styled.div`
  height: 100px;
  background-color: ${(p) => p.theme.colors.primary};
`;
