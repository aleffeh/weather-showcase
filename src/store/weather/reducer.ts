import {WeatherState} from '@store/weather/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: WeatherState = {
  lastUpdate: undefined,
  currentWeather: undefined,
  weatherForecast: undefined,
  isLoading: false,
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateWeatherForecast: state => {
      state.isLoading = true;
    },
    setLastUpdate: state => {
      state.lastUpdate = Date();
      state.isLoading = false;
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
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
