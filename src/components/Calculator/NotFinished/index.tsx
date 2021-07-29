import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { getUnfinishedAnswersCount } from "../../../redux/mmpi/selectors";
import { Link } from "../../Link";
import { Txt } from "../../Txt";
import { ReactComponent as NotFinishedSvg } from "./test-not-finished.svg";

export const NotFinished = () => {
  const { t } = useTranslation();
  const remainingAnswers = useAppSelector(getUnfinishedAnswersCount);

  return (
    <Root>
      <StyledNotFinishedSvg />
      <MainText>{t("The questionnaire is not finished")}</MainText>
      <div>{t("Fill all the answers to view results.")}</div>
      <div>
        <Trans t={t}>
          Missing <Txt color="primary">{{ answers: remainingAnswers }}</Txt> answers.
          <AnswersLink transparent to="/calculator/answers">
            {" "}
            View answers.
          </AnswersLink>
        </Trans>
      </div>
    </Root>
  );
};

export const Root = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: 16px;
  }
`;
export const MainText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.primary600};
  margin-top: 32px;
  text-align: center;
`;
export const AnswersLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
`;
export const StyledNotFinishedSvg = styled(NotFinishedSvg)`
  height: 80px;
  width: 80px;
`;