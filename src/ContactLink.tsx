import { useTranslation } from "react-i18next";
import { Link } from "./components/Link";
import { Contact } from "./components/Menu";

export const ContactLink = () => {
  const { t } = useTranslation();
  return (
    <Link transparent to="/contact">
      <Contact>{t("contact")}</Contact>
    </Link>
  );
};
