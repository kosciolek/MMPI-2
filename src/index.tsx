import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {PortalContextProvider} from "./components/Portal/PortalContextProvider";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { AppThemeProvider } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <PortalContextProvider>
        <App />
      </PortalContextProvider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
