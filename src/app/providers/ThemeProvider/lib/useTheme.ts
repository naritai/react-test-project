import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../ui/ThemeProvider';

export interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme | undefined
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    if (typeof setTheme === 'function') {
      setTheme(newTheme);
    }
  };

  return { theme, toggleTheme };
}
