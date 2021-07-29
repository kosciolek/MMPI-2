import styled from "@emotion/styled/macro";
import { memo } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import {
  getAnswerCompactView,
  getFirstAnswer,
  getLastAnswer,
} from "../../../../redux/ui/selectors";
import { Divider } from "../../../Divider";
import { Grid } from "../../../Grid";
import { Answer, Text } from "./Answer";
import { PolishWarning } from "./PolishWarning";

export const Answers = memo(() => {
  const first = useAppSelector(getFirstAnswer);
  const last = useAppSelector(getLastAnswer);
  const count = last - first;

  const isCompactView = useAppSelector(getAnswerCompactView);

  return (
    <Root>
      <PolishWarning />
      <Grid container>
        {Array.from({ length: count }).map((_, i) => (
          <StyledGrid
            /* eslint-disable-next-line react/no-array-index-key */
            key={`${first}-${i}`}
            item
            xs={12}
            lg={isCompactView ? 6 : 12}
          >
            <Answer index={first + i} />
            <Divider style={{ opacity: 0.3 }} />
          </StyledGrid>
        ))}
      </Grid>
    </Root>
  );
});

export const Root = styled.div`
  align-self: stretch;
`;

export const StyledGrid = styled(Grid)`
  &:nth-of-type(odd) ${Text} {
    color: ${(p) => p.theme.colors.neutral600};
  }
`;
