import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Button } from "./components/Button";
import { Link } from "./components/Link";

export const ContactLink = () => {
  const { t } = useTranslation();
  return (
    <Link transparent to="/contact">
      <Contact>{t("contact")}</Contact>
    </Link>
  );
};

export const Contact = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
`;
