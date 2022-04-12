import React from 'react';
import {useApplicationTheme} from '@hooks/index';
import {ThemeProvider} from 'styled-components';
import {DarkTheme, LightTheme} from '@themes';
import {StatusBar} from 'react-native';

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
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkTheme ? DarkTheme.bgColor : LightTheme.bgColor}
      />
      <ThemeProvider theme={() => getThemeData()}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export {AppThemeProvider, AppThemeContext};
