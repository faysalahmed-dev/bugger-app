import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types'
import Order from '../../Components/Order/Order/Order';
import { connect } from 'react-redux';
import { fatchOrderFormDataBase } from '../../Store/Action/ActionCreator/index';
import Loader from '../../Components/UI/Loader/Loader';
import withError from '../../Hoc/WithErrorHandler/withError';
import ErrorMes from '../../Util/ErrorMes';
import axios from '../../axios/http';
import Button from '../../Components/UI/Button/Button'

import './Orders.scss';
const Orders = props => {
	const [totalOrders,setTotaOrders] = useState(1);

	useEffect(() => {
		props.getOrders(props.token, props.userId, () => {
			if (props.orders.length === 0) 
				setTotaOrders(0);
		});
	}, []);

	const handleClick = () =>props.history.push('/');

	const { orders, error } = props;
	let content = <Loader />;
	let meg;
	if (error) content = <ErrorMes height={{ height: '100vh' }} />;

	if (totalOrders === 0) 
		meg = <p className="orders__nofound">no orders founds</p>;
	
	if (orders.length > 0) {
		content = orders.map(({ id, ingredients, price }) => (
			<Order key={id} ingredients={ingredients} price={price} />
		));
	}
	return (
		<div className="orders__page">
			<div className="orders__bg"></div>
			<div className="orders__list">
				<h2 className="orders__list-title">
					<div></div>
					My <span>Orders</span>
				</h2>
				<div className="orders__order">
					{totalOrders > 0 ? content : meg}
				</div>
				<div className="orders__button-group">
					<Button button="primary-outline button-sm rounded" type="submit" handleClick={props.history.goBack}>
						Cancle
					</Button>
					<Button
					handleClick={handleClick}
					button="primary-outline button-sm rounded" type="button">
						{totalOrders > 0 ? 'Check Out' : 'Build Burger'}
					</Button>
				</div>
			</div>
		</div>
	);
}


const mapStateToProps = (state) => ({
	orders: state.orders.orders,
	error: state.orders.error,
	token: state.auth.token,
	userId: state.auth.localId
});

const mapDispatchToProps = (dispatch) => ({
	getOrders(token, userId, callBack) {
		dispatch(fatchOrderFormDataBase(token, userId,callBack));
	}
});

export default withError(connect(mapStateToProps, mapDispatchToProps)(Orders), axios);
