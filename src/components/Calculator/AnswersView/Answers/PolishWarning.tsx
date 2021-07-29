import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Grid } from "../../../Grid";

export const PolishWarning = () => {
  const { i18n } = useTranslation();
  const isPolishWarning = i18n.language === "pl";
  if (!isPolishWarning) return null;

  return (
    <Grid item xs={12}>
      <Root>Polskie tłumaczenie zostanie wkrótce uzupełnione.</Root>
    </Grid>
  );
};

export const Root = styled.div`
  background-color: ${(p) => p.theme.colors.errorLight};
  padding: 16px;
  text-align: center;
  color: ${(p) => p.theme.colors.neutral900};
  margin-bottom: 16px;
`;
