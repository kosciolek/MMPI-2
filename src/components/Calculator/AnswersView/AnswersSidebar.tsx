import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as CompactViewIcon } from "../../../assets/compact-view.svg";
import { media } from "../../../hooks/media";
import { useNotification } from "../../../hooks/notifications";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { mmpiSlice } from "../../../redux/mmpi";
import { uiSlice } from "../../../redux/ui";
import { getAnswerCompactView } from "../../../redux/ui/selectors";
import { Button } from "../../Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "../../Dialog";
import { Divider } from "../../Divider";
import { Link } from "../../Link";
import { Sidebar } from "../../Sidebar";
import { Txt } from "../../Txt";
import { DownloadAnswersButton } from "../DownloadAnswersButton";
import { UploadAnswersButton } from "../UploadAnswersButton";
import { AnswersPerPageSelect } from "./AnswersPerPageSelect";
import { ReactComponent as ResultsIcon } from "./back-to-results.svg";
import { ReactComponent as ClearIcon } from "./clear-answers.svg";
import { GoToUnanswered } from "./GoToUnanswered";

export const AnswersSidebar = () => {
  const { t } = useTranslation();
  const isLg = media.useLg();
  const dispatch = useAppDispatch();

  const isCompact = useAppSelector(getAnswerCompactView);

  const makeNotification = useNotification();

  return (
    <Sidebar>
      <Link to=".">
        <Button noPadding left={<ResultsIcon />} color="neutral600">
          <span>
            <Trans t={t}>
              View <Txt color="primary">results</Txt>
            </Trans>
          </span>
        </Button>
      </Link>
      <DownloadAnswersButton />
      <UploadAnswersButton />
      <GoToUnanswered />
      {isLg && (
        <Button
          noPadding
          left={<CompactViewIcon />}
          color="neutral600"
          onClick={() => dispatch(uiSlice.actions.toggleAnswerCompactView())}
        >
          <span>
            {isCompact ? (
              <Trans t={t}>
                Full <Txt color="primary">view</Txt>
              </Trans>
            ) : (
              <Trans t={t}>
                Compact <Txt color="primary">view</Txt>
              </Trans>
            )}
          </span>
        </Button>
      )}
      <Divider />
      <AnswersPerPageSelect />
      <Divider />
      <div>
        <Dialog
          action={({ open }) => (
            <Button color="neutral600" noPadding left={<ClearIcon />} onClick={open}>
              <span>
                <Trans t={t}>
                  <Txt color="primary">Clear</Txt> answers
                </Trans>
              </span>
            </Button>
          )}
          content={({ close }) => (
            <div>
              <DialogTitle>{t("Clear answers")}</DialogTitle>
              <DialogContent>{t("Are you sure you want to reset all answers?")}</DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    dispatch(mmpiSlice.actions.resetAnswers());
                    makeNotification({
                      title: t("Answers cleared"),
                    });
                    close();
                  }}
                  variant="filled"
                >
                  {t("Yes")}
                </Button>
                <Button onClick={close}>{t("No")}</Button>
              </DialogActions>
            </div>
          )}
        />
      </div>
    </Sidebar>
  );
};
