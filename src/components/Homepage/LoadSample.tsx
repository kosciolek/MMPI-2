import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useNotification } from "../../hooks/notifications";
import { questionCount } from "../../mmpi-2/utils";
import { useAppDispatch } from "../../redux/hooks";
import { mmpiSlice } from "../../redux/mmpi";
import { Button } from "../Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "../Dialog";

export const LoadSample = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const makeNotification = useNotification();
  const router = useHistory();

  const onClick = () => {
    makeNotification({
      title: t("Answers loaded"),
      content: t("A random answer set has been generated"),
    });

    const random = Array.from({ length: questionCount }).map(() => Math.random() > 0.5);
    dispatch(mmpiSlice.actions.replaceAnswers(random));
    router.push("/calculator/answers");
  };

  return (
    <Root>
      <Dialog
        action={({ open }) => (
          <LoadSampleButton noPadding onClick={open}>
            {t("Click here to load a sample answer set")}
          </LoadSampleButton>
        )}
        content={({ close }) => (
          <div>
            <DialogTitle>{t("Load random answers")}</DialogTitle>
            <DialogContent>
              {t(
                "Are you sure you want to load random answers? All previous answers will be cleared"
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={onClick} variant="filled">
                {t("Yes")}
              </Button>
              <Button onClick={close}>{t("No")}</Button>
            </DialogActions>
          </div>
        )}
      />
    </Root>
  );
};

export const Root = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.primary100};
  padding-top: 16px;
  font-size: 16px;
`;
export const LoadSampleButton = styled(Button)`
  text-transform: none;
  display: block;
`;
