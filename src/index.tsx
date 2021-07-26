import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { PortalContextProvider } from "./components/Portal/PortalContextProvider";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { AppThemeProvider } from "./theme";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <PortalContextProvider>
          <App />
        </PortalContextProvider>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
