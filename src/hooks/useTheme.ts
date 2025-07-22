import { useState, useEffect } from 'react';
import { Colors } from '../constants';

export interface Theme {
  colors: typeof Colors;
  isDark: boolean;
}

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const theme: Theme = {
    colors: Colors, // You could switch between light and dark colors here
    isDark,
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return {
    theme,
    isDark,
    toggleTheme,
  };
}; 