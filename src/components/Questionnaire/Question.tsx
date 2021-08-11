import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { media } from "../../hooks/media";
import { questionCount } from "../../mmpi-2/utils";
import { mmpiSlice } from "../../redux/mmpi";
import { Button } from "../Button";
import { contentWidth } from "../Layout/utils";
import { Link } from "../Link";
import { QuestionText } from "./QuestionText";

export type QuestionProps = {
  id: number;
};

/* Todo make links relative */
export const Question = ({ id }: QuestionProps) => {
  const { t } = useTranslation();

  const nextQuestion = id + 2;

  const dispatch = useDispatch();
  const onAnswerClick = (answer: boolean) =>
    dispatch(
      mmpiSlice.actions.answerSelected({
        questionId: id,
        answer,
      })
    );

  return (
    <Root>
      <Contents>
        <Counter>
          {id + 1} / {questionCount}
        </Counter>
        <QuestionText id={id} />
        <Answers>
          <Link to={`/questionnaire/${nextQuestion}`} onClick={() => onAnswerClick(true)}>
            <Answer>{t("Yes")}</Answer>
          </Link>
          <Link to={`/questionnaire/${nextQuestion}`} onClick={() => onAnswerClick(false)}>
            <Answer>{t("No")}</Answer>
          </Link>
        </Answers>
      </Contents>
    </Root>
  );
};

export const Root = styled.div`
  margin: 0 auto;
  width: ${contentWidth};
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
export const Counter = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${(p) => p.theme.colors.neutral600};
`;
export const Answers = styled.div`
  margin-top: 80px;
  display: flex;
  & > * + * {
    margin-left: 64px;
  }
`;
export const Answer = styled(Button)`
  color: ${(p) => p.theme.colors.primary500};
  font-size: 40px;
  font-weight: normal;
  text-transform: uppercase;
  user-select: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;
