import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export type HelmetTitleProps = {
  title: string;
};

export const HelmetTitle = ({ title }: HelmetTitleProps) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t('MMPI - 2')}{" "}- {title}</title>
    </Helmet>
  );
};
