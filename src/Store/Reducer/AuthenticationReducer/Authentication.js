/* eslint-disable default-case */
import * as actionType from '../../Action/ActionType';
import { singInSuccess,logout } from './AuthenticationHelper';
import updataObject from '../Utility/Utility';

const tokenLs = JSON.parse(sessionStorage.getItem('user'))
const initialState = {
	token: tokenLs ? tokenLs.token : null,
	localId: tokenLs ? tokenLs.localId : null,
	error: false,
};

const authenticationReudcer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.AUTH_USER:
			return singInSuccess(state, action);
		case actionType.AUTH_FAILD:
			return updataObject(state,{error:true});
		case actionType.LOG_OUT : 
			return logout(state)
		default:
			return state;
	}
};
export default authenticationReudcer;
