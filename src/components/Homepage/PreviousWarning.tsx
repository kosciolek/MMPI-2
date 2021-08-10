import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useNotification } from "../../hooks/notifications";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mmpiSlice } from "../../redux/mmpi";
import { getIsEmpty } from "../../redux/mmpi/selectors";
import { Button } from "../Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "../Dialog";

export const PreviousWarning = () => {
  const { t } = useTranslation();
  const isEmpty = useAppSelector(getIsEmpty);
  const dispatch = useAppDispatch();

  const makeNotification = useNotification();

  const onClick = () => {
    makeNotification({
      title: t("Answers cleared"),
      content: t("The questionnaire has been emptied"),
    });
    dispatch(mmpiSlice.actions.resetAnswers());
  };

  if (isEmpty) return null;
  return (
    <Root>
      {t("The previous test has been remembered")}
      <Dialog
        action={({ open }) => (
          <PreviousWarningButton noPadding onClick={open}>
            {t("Click here to start fresh")}
          </PreviousWarningButton>
        )}
        content={({ close }) => (
          <div>
            <DialogTitle>{t("Clear answers")}</DialogTitle>
            <DialogContent>{t("Are you sure you want to clear all answers?")}</DialogContent>
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
  margin-top: 16px;
`;
export const PreviousWarningButton = styled(Button)`
  text-transform: none;
  display: block;
`;
