import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { AppThemeProvider } from "./theme";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
