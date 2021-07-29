import { Trans, useTranslation } from "react-i18next";
import { useAppSelector } from "../../redux/hooks";
import { getAnswers } from "../../redux/mmpi/selectors";
import { downloadString } from "../../utils/js";
import { Button } from "../Button";
import { Txt } from "../Txt";
import { ReactComponent as DownloadIcon } from "./AnswersView/download.svg";

export const DownloadAnswersButton = () => {
  const { t } = useTranslation();

  const answers = useAppSelector(getAnswers);
  const handleDownloadClick = () => {
    const date = new Date();
    const dateFormatted = date.toLocaleDateString().replace(/\//g, "-");
    const filename = `MMPI-${t("answers")}--${dateFormatted}.json`;
    downloadString(JSON.stringify(answers), filename);
  };

  return (
    <Button noPadding left={<DownloadIcon />} color="neutral600" onClick={handleDownloadClick}>
      <span>
        <Trans t={t}>
          <Txt color="primary">Download</Txt> answers
        </Trans>
      </span>
    </Button>
  );
};
