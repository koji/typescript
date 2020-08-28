import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContext = () => {
    const darkMode = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyle ={
        backgroundColor: darkMode ? '#000' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '2rem',
        margin: '2rem',
    }
    return(
      <>
        <button onClick={toggleTheme}>toggle theme</button>
        <div style={themeStyle}>useContext - {darkMode ? 'dark mode' : 'non dark mode'}</div>
      </>
    )
};

export default FunctionContext;