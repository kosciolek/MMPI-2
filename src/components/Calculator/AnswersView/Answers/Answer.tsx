import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { AnswerRadio } from "./AnswerRadio";

export type AnswerProps = {
  index: number;
};

export const Answer = ({ index }: AnswerProps) => {
  const { t } = useTranslation("questions");
  return (
    <Root>
      <AnswerRadio index={index} />
      <Text>
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

export const Text = styled.span`
  margin-left: 16px;
  color: ${(p) => p.theme.colors.primary700};
  font-weight: 700;
  font-size: 16px;
`;
