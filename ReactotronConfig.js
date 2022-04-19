import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';

export const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .useReactNative()
  .connect();

tron.clear();

console.tron = tron;

export const sagaMonitor = __DEV__ ? tron.createSagaMonitor() : undefined;
export const enhancer = __DEV__ ? tron.createEnhancer() : undefined;
