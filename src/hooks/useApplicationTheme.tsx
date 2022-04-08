import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const themeHash = '6e3cf01a22892faa5be83597ba9c274e'; //'appTheme' in md5

const useApplicationTheme = () => {
  const [isDarkTheme, setTheme] = useState(true);

  const updateApplicationThemeState = async () => {
    const isAppDarkTheme = await AsyncStorage.getItem(themeHash);
    if (isAppDarkTheme === null) {
      return;
    }
    setTheme(await JSON.parse(isAppDarkTheme));
  };

  const toggleTheme = async () => {
    await AsyncStorage.setItem(themeHash, JSON.stringify(!isDarkTheme));
    setTheme(!isDarkTheme);
  };

  useEffect(() => {
    updateApplicationThemeState();
  }, []);

  return {isDarkTheme, toggleTheme};
};

export default useApplicationTheme;
