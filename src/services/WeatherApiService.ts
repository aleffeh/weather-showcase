const api = {
  getCurrentWeather: (lat: number, lon: number) => {
    return `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },
  getForecast: (lat: number, lon: number) => {
    return `data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,current,alerts&units=metric`;
  },
};

export default api;
