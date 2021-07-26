import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useId } from "../../../../hooks/useId";
import { Answer } from "../../../../mmpi-2/types";
import { useAppSelector } from "../../../../redux/hooks";
import { mmpiSlice } from "../../../../redux/mmpi";
import { getAnswer } from "../../../../redux/mmpi/selectors";

export type AnswerRadioProps = {
  index: number;
};

export const AnswerRadio = ({ index }: AnswerRadioProps) => {
  const dispatch = useDispatch();

  const id = useId();
  const yesId = `input-yes-${id}`;
  const noId = `input-no-${id}`;

  const { t } = useTranslation();

  const answer = useAppSelector(getAnswer(index));
  const handleChange = (state: Answer) =>
    dispatch(
      mmpiSlice.actions.answerSelected({
        questionId: index,
        answer: state,
      })
    );

  return (
    <Root>
      <Pair onClick={() => handleChange(true)}>
        <Input
          checked={answer === true}
          onChange={() => handleChange(true)}
          name={id}
          id={yesId}
          type="radio"
        />
        <Label>{t("Yes")}</Label>
      </Pair>
      <Pair onClick={() => handleChange(false)}>
        <Input
          checked={answer === false}
          onChange={() => handleChange(false)}
          name={id}
          id={noId}
          type="radio"
        />
        <Label>{t("No")}</Label>
      </Pair>
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * + * {
    margin-left: 16px;
  }
`;
export const Pair = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
`;
export const Input = styled.input`
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.primary};
  width: 19px;
  height: 19px;
  cursor: inherit;
  &:checked {
    background-color: ${(p) => p.theme.colors.primary};
  }
`;
export const Label = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  cursor: inherit;
  color: ${(p) => p.theme.colors.primary};
  margin-left: 8px;
`;
