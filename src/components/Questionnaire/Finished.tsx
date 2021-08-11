import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { Link } from "../Link";
import { ReactComponent as DoneSvg } from "./test-done.svg";

export const Finished = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <FinishedText>{t("Questionnaire completed")}</FinishedText>
      <Link to="/calculator">
        <GoToResults>{t("View results")}</GoToResults>
      </Link>
      <StyledDoneSvg />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 24px;

  & > * + * {
    margin-top: 24px;
  }
`;
export const FinishedText = styled.div`
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary600};
`;
export const GoToResults = styled(Button)``;
export const StyledDoneSvg = styled(DoneSvg)``;
