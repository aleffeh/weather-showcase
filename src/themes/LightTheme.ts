import {ApplicationBaseTheme, BaseTheme} from './ApplicationBaseTheme';

const LightTheme = <ApplicationBaseTheme>{
  bgColor: '#fff',
  textColor: '#383838',
  worldMapColor: '#f4f4f4',
};

export default {...Object.assign(BaseTheme, LightTheme)};
