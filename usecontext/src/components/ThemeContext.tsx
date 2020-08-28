import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext({});
const ThemeUpdateContext = React.createContext<any>({});

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }: any) => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleTheme = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return(
      <ThemeContext.Provider value={darkMode}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    )
}