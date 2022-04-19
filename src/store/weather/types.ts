export interface WeatherState {
  lastUpdate: string | undefined;
  currentWeather: CurrentWeather | undefined;
  weatherForecast: HourlyForecast[] | undefined;
  isLoading: boolean;
}

export interface Weather {
  description: string;
  icon: string;
  main: string;
}

export interface CurrentWeather {
  weather: Weather;
  temperature: number;
  city: string;
  country: string;
  coords: Location;
}

export interface HourlyForecast {
  dt: string;
  temp: number;
  weather: Weather;
}

export interface Location {
  lat: number;
  lon: number;
}
