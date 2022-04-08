import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppThemeProvider} from '@context/AppTheme';
import {WeatherForecast} from '@screens';

const AppStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

const App = () => {
  return (
    <AppThemeProvider>
      <SafeAreaView style={AppStyles.containerStyle}>
        <WeatherForecast />
      </SafeAreaView>
    </AppThemeProvider>
  );
};

export default App;
