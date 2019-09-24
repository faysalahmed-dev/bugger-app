import * as actionType from '../../ActionType';
import axios from '../../../../axios/http';

const fatchOrderSuccess = (orders) => {
	return {
		type: actionType.FATCH_ORDER_SUCCESS,
		orders
	};
};
const fatchOrderFaild = () => {
	return {
		type: actionType.FATCH_ORDER_FAILD
	};
};
export const fatchOrderFormDataBase = (token, userId,fn) => {
	const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
	return (dispatch) => {
		axios
			.get('/orders.json' + queryParams)
			.then(({ data }) => {
				const orders = [];
				for (let key in data) {
					orders.push({
						...data[key],
						id: key
					});
				}
				dispatch(fatchOrderSuccess(orders));
			}).then(() => fn())
			.catch(() => dispatch(fatchOrderFaild()));
	};
};
