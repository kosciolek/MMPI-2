import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalMenuContextProvider } from "./components/GlobalMenu/GlobalMenuContextProvider";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { AppThemeProvider } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalMenuContextProvider>
        <App />
      </GlobalMenuContextProvider>
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
