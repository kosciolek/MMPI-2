import styled from "@emotion/styled";
import { ReactComponent as WaveSvg } from "./wave.svg";

export const Wave = () => (
  <Root>
    <Line />
    <WaveContainer>
      <StyledWaveSvg />
      <Space />
    </WaveContainer>
  </Root>
);

export const Root = styled.div`
  display: grid;

  grid-template:
    "space-left main sidebar space-right" 250px / 1fr 1000px minmax(
      200px,
      300px
    )
    1fr;
`;
export const Line = styled.div`
  grid-area: sidebar;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const WaveContainer = styled.div`
  grid-row: 1;
  fill: ${(p) => p.theme.colors.primary};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  grid-column: space-left / space-right;
`;

// @ts-ignore
export const StyledWaveSvg = styled(WaveSvg)`
  display: block;
`;

export const Space = styled.div`
  flex-grow: 1;
  background-color: ${(p) => p.theme.colors.primary};
`;
