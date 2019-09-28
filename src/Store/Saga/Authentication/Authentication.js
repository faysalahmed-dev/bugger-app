import {put} from 'redux-saga/effects'
import * as actionType from '../../Action/ActionType'

export function* logoutSaga (action) {
    yield sessionStorage.removeItem('user');
     yield put({
          type: actionType.LOG_OUT
     });
}