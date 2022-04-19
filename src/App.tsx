import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppThemeProvider} from '@context/AppTheme';
import {WeatherForecast} from '@screens';
import {Provider} from 'react-redux';
import {store} from '@store';

const AppStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

const App = () => {
  return (
    <AppThemeProvider>
      <Provider store={store}>
        <SafeAreaView style={AppStyles.containerStyle}>
          <WeatherForecast />
        </SafeAreaView>
      </Provider>
    </AppThemeProvider>
  );
};

export default App;
