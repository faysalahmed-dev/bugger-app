import * as actionType from '../../ActionType';
import axios from 'axios';

//handle if auth faild
const authFaild = () => {
	return {
		type: actionType.AUTH_FAILD
	};
};
// logout
export const logout = () => {
	sessionStorage.removeItem('user')
	return {
		type: actionType.LOG_OUT
	};
};

// hanlde auth sing in or login
const authUser = (token, localId) => {
	sessionStorage.setItem('user', JSON.stringify({ token, localId }));
	return {
		type: actionType.AUTH_USER,
		token,
		localId
	};
};
export const authRedirect = (to) => {
	return {
		type: actionType.AUTH_REDIRECT,
		toPath: to
	};
};

export const authenticationSingUp = (email, password) => {
	return (dispatch) => {
		axios
			.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFV0wdTGe_IDwkLimci8UbSbnJIeER3So',
				{
					email,
					password,
					returnSecureToken: true
				}
			)
			.then((data) => {
				console.log(data);
				dispatch(authUser(data.data.idToken, data.data.localId));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFaild());
			});
	};
};

export const authenticationSingIn = (email, password) => {
	return (dispatch) => {
		axios
			.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFV0wdTGe_IDwkLimci8UbSbnJIeER3So',
				{
					email,
					password,
					returnSecureToken: true
				}
			)
			.then((data) => {
				dispatch(authUser(data.data.idToken, data.data.localId));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFaild());
			});
	};
};
