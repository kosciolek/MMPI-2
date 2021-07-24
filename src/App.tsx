import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { GlobalMenu } from "./components/GlobalMenu";
import { GlobalMenuPortal } from "./components/GlobalMenu/Portal";
import { Txt } from "./components/Txt";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { t } = useTranslation();

  const [someState, setSomeState] = useState("");
  return (
    <>
      <Helmet>
        <title>MMIP-2 - {t("Homepage")}</title>
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <div>
          <GlobalMenu />
          <input
            value={someState}
            onChange={(e) => setSomeState(e.target.value)}
          />
          <GlobalMenuPortal>
            <div>hey</div>
            {someState.split(" ").map((txt) => (
              <div>{txt}</div>
            ))}
          </GlobalMenuPortal>
          <Txt color="primary">Hello</Txt>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
