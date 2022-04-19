import axios from 'axios';
// @ts-ignore
import {API_TOKEN} from '@env';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  timeout: 1000,
});

instance.interceptors.request.use(
  requestConfig => {
    requestConfig.url += `&appid=${API_TOKEN}`;
    return requestConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
