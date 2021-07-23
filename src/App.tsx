import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <div>
          <Txt color="primary">Hello</Txt>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
