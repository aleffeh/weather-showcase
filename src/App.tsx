import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppThemeProvider} from '@context/AppTheme';
import {WeatherForecast} from '@screens';
import {Provider} from 'react-redux';
import {store} from '@store';
import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});

const App = () => {
  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    });

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then(granted => {
      if (granted) {
        RNLocation.subscribeToLocationUpdates(locations => {
          const location = {
            lat: locations[0].latitude,
            lon: locations[0].longitude,
          };
          AsyncStorage.setItem('last_location', JSON.stringify(location));
        });
      }
    });
  }, []);

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
