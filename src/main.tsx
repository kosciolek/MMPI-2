import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "@fontsource/inter";
import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="light">
      <CssBaseline />
      <App />
      <GlobalStyles
        styles={{
          body: {
            overflowY: "scroll",
          },
        }}
      />
    </CssVarsProvider>
  </React.StrictMode>
);
