/* eslint-disable default-case */
import * as actionType from '../../Action/ActionType';
import { singInSuccess } from './AuthenticationHelper';
import updataObject from '../Utility/Utility';

const initialState = {
	token: null,
	localId: null,
	error: false,
};

const authenticationReudcer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.AUTH_USER:
			return singInSuccess(state, action);
		case actionType.AUTH_FAILD:
			return updataObject(state,{error:true});
		case actionType.LOG_OUT : 
			return updataObject(state,initialState)
		default:
			return state;
	}
};
export default authenticationReudcer;
