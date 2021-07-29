import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { CalculatorRouting } from "./components/Calculator/routing";
import { Contact } from "./components/Contact";
import { Homepage } from "./components/Homepage";
import { Notifications } from "./components/Notifications";
import { Questionnaire } from "./components/Questionnaire";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>
          {t("MMPI - 2")} - {t("Homepage")}
        </title>
      </Helmet>
      <GlobalStyles />
      <Notifications />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/home" component={Homepage} />
        <Route path="/calculator" component={CalculatorRouting} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default App;
