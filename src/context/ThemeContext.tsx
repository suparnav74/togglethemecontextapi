import { createContext } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }

  const defaultContextValue: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {} 
  };
 const ThemeContext = createContext<ThemeContextType>(defaultContextValue); 
 
export default ThemeContext;
