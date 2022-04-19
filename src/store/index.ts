import {configureStore, StoreEnhancer} from '@reduxjs/toolkit';
import {sagaMonitor, enhancer} from '../../ReactotronConfig';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '@store/rootSaga';
import weather from './weather';

const saga = createSagaMiddleware({sagaMonitor});

export const store = configureStore({
  reducer: {weather},
  middleware: [saga],
  enhancers: __DEV__ ? [enhancer as StoreEnhancer] : undefined,
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
