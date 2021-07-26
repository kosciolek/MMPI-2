import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Button } from "../../../Button";
import { ReactComponent as PlFlag } from "./pl-flag.svg";
import { ReactComponent as EnFlag } from "./en-flag.svg";

const flags = {
  pl: PlFlag,
  en: EnFlag,
};

export const LanguageMenu = () => {
  const { t, i18n } = useTranslation();
  const FlagComponent = flags[i18n.language as keyof typeof flags] ?? flags.pl;

  const onClick = () => {
    /* Todo - handle more languages */
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
  };
  return (
    <Root left={<FlagComponent />} onClick={onClick}>
      <LangText>{t("Language")}</LangText>
    </Root>
  );
};
export const Root = styled(Button)`
  background-color: ${(p) => p.theme.colors.primary50};
`;
export const LangText = styled.span`
  color: ${(p) => p.theme.colors.neutral600};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;
