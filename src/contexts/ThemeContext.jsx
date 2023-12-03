import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageState('dark', 'theme');

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? setTheme('dark')
        : setTheme('light');
    }
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
