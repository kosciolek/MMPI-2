import { ThemeProvider } from "@emotion/react";
import { createContext, FC, useContext, useMemo, useState } from "react";
import { light } from "./light";

export type AppTheme = typeof light;

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}

export const themes = {
  light,
};
export type ThemeType = keyof typeof themes;
export type ThemeColor = keyof AppTheme["colors"];

export type ThemeTypeContext = {
  type: ThemeType;
  setType: (type: ThemeType) => void;
};
export const themeTypeContext = createContext<ThemeTypeContext>({
  type: "light",
  setType: () => {},
});
export const useThemeType = () => useContext(themeTypeContext);

export const AppThemeProvider: FC = ({ children }) => {
  const [type, setType] = useState<ThemeType>("light");
  const theme = themes[type];
  const contextValue = useMemo(
    () => ({
      type,
      setType,
    }),
    []
  );
  return (
    <themeTypeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeTypeContext.Provider>
  );
};
