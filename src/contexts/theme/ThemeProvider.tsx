import { FC, useState, useMemo } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

export const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] =useState<Theme>(defaultTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}