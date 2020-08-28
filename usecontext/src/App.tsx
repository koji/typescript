import React from 'react';
import './App.css';
import FunctionContext from './components/FunctionContext';
import { ThemeProvider } from './components/ThemeContext';

// export const ThemeContext = React.createContext({});

const App = () => {
  // const [darkMode, setDarkMode] = useState<boolean>(true);

  // const toggleTheme = () => {
  //   setDarkMode(prevDarkMode => !prevDarkMode);
  // }

  return (
      <ThemeProvider>
        <FunctionContext />
      </ThemeProvider>
  );
}

export default App;
