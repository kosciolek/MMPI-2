import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Txt } from "./components/Txt";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>MMIP-2 - {t("Homepage")}</title>
      </Helmet>
      <GlobalStyles />
      <div>
        <Txt color="primary">Hello</Txt>
      </div>
    </>
  );
}

export default App;
