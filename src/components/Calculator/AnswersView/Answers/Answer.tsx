import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../../redux/hooks";
import { mmpiSlice } from "../../../../redux/mmpi";
import { AnswerRadio } from "./AnswerRadio";

export type AnswerProps = {
  index: number;
};

export const Answer = ({ index }: AnswerProps) => {
  const { t } = useTranslation("questions");
  const dispatch = useAppDispatch();

  const onTextClick = () => {
    dispatch(mmpiSlice.actions.toggleQuestion(index));
  };

  return (
    <Root>
      <AnswerRadio index={index} />
      <Text onClick={onTextClick}>
        {index + 1}. {t(`${index}`)}
      </Text>
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
`;

export const Text = styled.div`
  margin-left: 16px;
  color: ${(p) => p.theme.colors.primary700};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
`;
