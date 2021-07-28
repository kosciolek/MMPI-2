import { Trans, useTranslation } from "react-i18next";
import { useNotification } from "../../hooks/notifications";
import { useTextUpload } from "../../hooks/useTextUpload";
import { $callback } from "../../hooks/utils";
import { questionCount } from "../../mmpi-2/utils";
import { useAppDispatch } from "../../redux/hooks";
import { mmpiSlice } from "../../redux/mmpi";
import { Button } from "../Button";
import { Txt } from "../Txt";
import { ReactComponent as UploadIcon } from "./AnswersView/upload.svg";

export const UploadAnswersButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const makeNotification = useNotification();

  const { triggerUpload, inputProps } = useTextUpload(
    $callback((text, filename) => {
      const notifyError = () =>
        makeNotification({
          title: t("Upload error"),
          content: (
            <>
              <div>{t("Invalid answers file.")}</div>
              <Txt color="neutral">{filename}</Txt>
            </>
          ),
          type: "error",
        });

      try {
        const json = JSON.parse(text);

        const validity =
          Array.isArray(json) &&
          json.length === questionCount &&
          json.every((elem) => [false, true, null].includes(elem));

        if (validity) {
          makeNotification({
            title: t("Answers uploaded"),
            content: <Txt color="neutral">{filename}</Txt>,
          });
          dispatch(mmpiSlice.actions.replaceAnswers(json));
        } else {
          notifyError();
        }
      } catch (e) {
        notifyError();
      }
    })
  );

  return (
    <>
      <Button
        noPadding
        left={<UploadIcon />}
        color="neutral600"
        onClick={triggerUpload}
      >
        <span>
          <Trans t={t}>
            <Txt color="primary">Upload</Txt> answers
          </Trans>
        </span>
      </Button>
      <input {...inputProps} />
    </>
  );
};
