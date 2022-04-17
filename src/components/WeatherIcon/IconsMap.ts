import Sun from '@assets/WeatherIcons/01d.png';
import Moon from '@assets/WeatherIcons/01n.png';
import Cloud from '@assets/WeatherIcons/03.png';
import FewCloudsDay from '@assets/WeatherIcons/02d.png';
import FewCloudsNight from '@assets/WeatherIcons/02n.png';
import BrokenCloudsDay from '@assets/WeatherIcons/04d.png';
import BrokenCloudsNight from '@assets/WeatherIcons/04n.png';
import ShowerRain from '@assets/WeatherIcons/09.png';
import RainDay from '@assets/WeatherIcons/10d.png';
import RainNight from '@assets/WeatherIcons/10n.png';
import ThunderStorm from '@assets/WeatherIcons/11.png';
import SnowDay from '@assets/WeatherIcons/13d.png';
import SnowNight from '@assets/WeatherIcons/13n.png';
import Mist from '@assets/WeatherIcons/50.png';

export type WeatherIconsType = keyof typeof icons;
export const icons = Object.freeze({
  '01d': Sun,
  '01n': Moon,
  '02d': FewCloudsDay,
  '02n': FewCloudsNight,
  '03d': Cloud,
  '03n': Cloud,
  '04d': BrokenCloudsDay,
  '04n': BrokenCloudsNight,
  '09d': ShowerRain,
  '09n': ShowerRain,
  '10d': RainDay,
  '10n': RainNight,
  '11d': ThunderStorm,
  '11n': ThunderStorm,
  '13d': SnowDay,
  '13n': SnowNight,
  '50d': Mist,
  '50n': Mist,
});
