import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { AppThemeProvider } from "./theme";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
