import React from 'react';
import {useApplicationTheme} from '@hooks/index';
import {ThemeProvider} from 'styled-components';
import {DarkTheme, LightTheme} from '@themes';

interface AppThemeContext {
  isDarkTheme: boolean;
  toggleTheme: Function;
}

const initialState: AppThemeContext = {
  isDarkTheme: true,
  toggleTheme: () => {},
};

const AppThemeContext = React.createContext(initialState);

const AppThemeProvider: React.FC = ({children}) => {
  const {isDarkTheme, toggleTheme} = useApplicationTheme();

  const getThemeData = () => {
    return isDarkTheme ? DarkTheme : LightTheme;
  };

  return (
    <AppThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <ThemeProvider theme={() => getThemeData()}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export {AppThemeProvider, AppThemeContext};
