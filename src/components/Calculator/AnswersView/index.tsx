import styled from "@emotion/styled";
import { AnswersSidebar } from "./AnswersSidebar";
import { useWindowEvent } from "../../../hooks/useWindowEvent";
import { useAppDispatch } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { Grid } from "../../Grid";
import { Answers } from "./Answers";
import { Pagination } from "./Pagination";

export const AnswersView = () => {
  const dispatch = useAppDispatch();

  useWindowEvent(
    "wheel",
    (e) => {
      if (!e.shiftKey) return;
      e.preventDefault();
      const isUp = e.deltaY > 0;
      dispatch(isUp ? uiSlice.actions.nextPage() : uiSlice.actions.prevPage());
    },
    { passive: false }
  );

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={12} lg={9}>
        <Root>
          <Pagination />
          <Answers />
          <Pagination />
        </Root>
      </Grid>
      <Grid item xs={0} lg={3}>
        <AnswersSidebar />
      </Grid>
    </Grid>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  & > * + * {
    margin-top: 8px;
  }
`;
