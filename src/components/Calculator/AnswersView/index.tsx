import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { getUnfinishedAnswersCount } from "../../../redux/mmpi/selectors";
import { HelmetTitle } from "../../HelmetTitle";
import { AnswersSidebar } from "./AnswersSidebar";
import { useWindowEvent } from "../../../hooks/useWindowEvent";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
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

  const { t } = useTranslation();
  const unfinishedAnswers = useAppSelector(getUnfinishedAnswersCount);

  return (
    <>
      <HelmetTitle
        title={
          unfinishedAnswers === 0
            ? t("Answers")
            : t(`Answers {{count}} left`, { count: unfinishedAnswers })
        }
      />
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
    </>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 48px;

  & > * + * {
    margin-top: 8px;
  }
`;
