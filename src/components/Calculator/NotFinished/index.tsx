import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
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
      <NotFinishedSvg />
      <MainText>{t("The questionnaire is not finished")}</MainText>
      <Trans t={t}>
        Missing <Txt color="primary">{{ answers: remainingAnswers }}</Txt>{" "}
        answers.{" "}
        <AnswersLink transparent to="/calculator/answers">
          View answers.
        </AnswersLink>
      </Trans>
    </Root>
  );
};

export const Root = styled.div`
  margin-top: 80px;
`;
export const MainText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.primary600};
  margin: 32px 0 16px 0;
`;
export const AnswersLink = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
`;
