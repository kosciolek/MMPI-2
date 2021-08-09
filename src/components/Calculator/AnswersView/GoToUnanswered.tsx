import { Trans, useTranslation } from "react-i18next";
import { useNotification } from "../../../hooks/notifications";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getFirstUnanswered, getIsFinished } from "../../../redux/mmpi/selectors";
import { uiSlice } from "../../../redux/ui";
import { getAnswersPerPage } from "../../../redux/ui/selectors";
import { Button } from "../../Button";
import { ReactComponent as ResultsIcon } from "./back-to-results.svg";
import { Txt } from "../../Txt";

export const GoToUnanswered = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const perPage = useAppSelector(getAnswersPerPage);
  const makeNotif = useNotification();

  const firstUnanswered = useAppSelector(getFirstUnanswered);
  const isFinished = useAppSelector(getIsFinished);

  const onClick = () => {
    if (isFinished) {
      makeNotif({
        title: t("Already finished"),
        content: t("All questions are answered already"),
      });
      return;
    }

    const newPage = Math.floor(firstUnanswered / perPage);
    dispatch(uiSlice.actions.setAnswersPage(newPage));
    dispatch(uiSlice.actions.setMobileMenuOpen(false));
  };

  return (
    <Button noPadding left={<ResultsIcon />} color="neutral600" onClick={onClick}>
      <span>
        <Trans t={t}>
          Jump to <Txt color="primary">unanswered</Txt>
        </Trans>
      </span>
    </Button>
  );
};
