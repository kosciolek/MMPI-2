import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Calculator } from "./components/Calculator";
import { Homepage } from "./components/Homepage";
import { Layout } from "./components/Layout";
import { Questionnaire } from "./components/Questionnaire";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("MMIP - 2")} - {t("Homepage")}</title>
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/questionnaire">
            <Layout>
              <Questionnaire />
            </Layout>
          </Route>
          <Route path="/home">
            <Layout>
              <Homepage />
            </Layout>
          </Route>
          <Route path="/calculator">
            <Layout>
              <Calculator />
            </Layout>
          </Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
