import {ApplicationBaseTheme, BaseTheme} from './ApplicationBaseTheme';

const DarkTheme = <ApplicationBaseTheme>{
  bgColor: '#000000',
  textColor: '#fff',
  worldMapColor: '#29292a',
};

export default {...Object.assign(BaseTheme, DarkTheme)};
