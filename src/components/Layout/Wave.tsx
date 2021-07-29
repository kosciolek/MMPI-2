import styled from "@emotion/styled";
import { Grid } from "../Grid";
import { contentWidth } from "./utils";
import { ReactComponent as WaveSvg } from "./wave.svg";

export const Wave = () => (
  <Root>
    <Grid container area="main">
      <Grid item xs={0} lg={9} />
      <Grid item xs={0} lg={3}>
        <Line />
      </Grid>
    </Grid>
    <WaveContainer>
      <StyledWaveSvg preserveAspectRatio="none" />
      <Space />
    </WaveContainer>
  </Root>
);

export const Root = styled.div`
  display: grid;
  grid-template: "space-l main space-r" 250px / 1fr ${contentWidth} 1fr;
`;
export const Line = styled.div`
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
  height: 100%;
`;
export const WaveContainer = styled.div`
  grid-row: 1;
  fill: ${(p) => p.theme.colors.primary};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  grid-column: space-l / space-r;
`;

// @ts-ignore
export const StyledWaveSvg = styled(WaveSvg)`
  display: block;
  min-width: 100%;
  margin-bottom: -1px;
  margin-left: -3px;
`;

export const Space = styled.div`
  flex-grow: 1;
  background-color: ${(p) => p.theme.colors.primary};
`;
