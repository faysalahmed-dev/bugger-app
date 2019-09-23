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
	return {
		type: actionType.LOG_OUT
	};
};

// hanlde auth sing in or login
const authUser = (token, localId) => {
	return {
		type: actionType.AUTH_USER,
		token,
		localId
	};
};
export const authRedirect = () => {
	return {
		type: actionType.AUTH_REDIRECT,
	}
}

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
			.then(({ data }) => {
				dispatch(authUser(data.idToken, data.localId));
				// dispatch(authRedirect(history));
			})
			.catch(() => {
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
				// dispatch(authRedirect(history));
			})
			.catch(() => {
				// console.log('auth faild catch')
				// dispatch(authFaild());
			});
	};
};
