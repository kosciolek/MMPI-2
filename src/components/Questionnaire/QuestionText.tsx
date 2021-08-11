import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { media } from "../../hooks/media";

export const QuestionText = ({ id }: { id: number }) => {
  const { t } = useTranslation("questions");
  return <Root>{t(id.toString())}</Root>;
};

export const Root = styled.div`
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
