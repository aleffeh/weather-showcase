import {all} from 'redux-saga/effects';
import {weatherSagas} from './weather/sagas';

export function* rootSaga() {
  yield all([weatherSagas()]);
}
