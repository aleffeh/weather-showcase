import {WeatherState} from '@store/weather/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: WeatherState = {
  lastUpdate: undefined,
  currentWeather: undefined,
  weatherForecast: undefined,
  isLoading: false,
  hasError: false,
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateWeatherForecast: state => {
      state.isLoading = true;
    },
    getLocationError: state => {
      state.isLoading = false;
      state.hasError = true;
      state.currentWeather = undefined;
      state.weatherForecast = undefined;
    },
    setLastUpdate: state => {
      state.lastUpdate = Date();
      state.isLoading = false;
      state.hasError = false;
    },
    getCurrentWeatherSuccess: (state, action) => {
      state.currentWeather = action.payload;
    },
    getWeatherForecastSuccess: (state, action) => {
      state.weatherForecast = action.payload;
    },
  },
});

export const {
  setLastUpdate,
  updateWeatherForecast,
  getCurrentWeatherSuccess,
  getWeatherForecastSuccess,
  getLocationError,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
