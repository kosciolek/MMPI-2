import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";
import { media } from "../../hooks/media";
import { questionCount } from "../../mmpi-2/utils";
import { mmpiSlice } from "../../redux/mmpi";
import { Button } from "../Button";
import { contentWidth } from "../Layout/utils";
import { Link } from "../Link";

export type QuestionProps = {
  id: number;
};

/* Todo make links relative */
export const Question = ({ id }: QuestionProps) => {
  const { t } = useTranslation("questions");

  const nextQuestion = id + 2;

  const dispatch = useDispatch();
  const onAnswerClick = (answer: boolean) =>
    dispatch(
      mmpiSlice.actions.answerSelected({
        questionId: id - 1,
        answer,
      })
    );

  if (Number.isNaN(id) || id > questionCount || id < 0) return <Redirect to="/questionnaire/1" />;

  return (
    <Root>
      <Contents>
        <Counter>
          {id + 1} / {questionCount}
        </Counter>
        <QuestionText>{t((id + 1).toString())}</QuestionText>
        <Answers>
          <Link to={`/questionnaire/${nextQuestion}`} onClick={() => onAnswerClick(true)}>
            <Answer>TAK</Answer>
          </Link>
          <Link to={`/questionnaire/${nextQuestion}`} onClick={() => onAnswerClick(false)}>
            <Answer>Nie</Answer>
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
export const QuestionText = styled.div`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  text-align: center;

  padding: 0 24px;
  font-size: 32px;
  ${media.md} {
    font-size: 44px;
  }
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
