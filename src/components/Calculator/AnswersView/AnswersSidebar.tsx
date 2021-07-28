import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as CompactViewIcon } from "../../../assets/compact-view.svg";
import { media } from "../../../hooks/media";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { getAnswerCompactView } from "../../../redux/ui/selectors";
import { Button } from "../../Button";
import { Link } from "../../Link";
import { Sidebar } from "../../Sidebar";
import { Txt } from "../../Txt";
import { DownloadAnswersButton } from "../DownloadAnswersButton";
import { UploadAnswersButton } from "../UploadAnswersButton";
import { ReactComponent as ResultsIcon } from "./back-to-results.svg";

export const AnswersSidebar = () => {
  const { t } = useTranslation();
  const isLg = media.useLg();
  const dispatch = useAppDispatch();

  const isCompact = useAppSelector(getAnswerCompactView);

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
      <DownloadAnswersButton />
      <UploadAnswersButton />
    </Sidebar>
  );
};
