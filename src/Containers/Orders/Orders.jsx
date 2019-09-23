import React from 'react';
import Order from '../../Components/Order/Order/Order';
import { connect } from 'react-redux';
import { fatchOrderFormDataBase } from '../../Store/Action/ActionCreator/index';
import Loader from '../../Components/UI/Loader/Loader';
import withError from '../../Hoc/WithErrorHandler/withError';
import ErrorMes from '../../Util/ErrorMes';
import axios from '../../axios/http';
class Orders extends React.Component {
	state = {
		checkListLength: 1
	};
	componentDidMount() {
		this.props.getOrders(this.props.token, this.props.userId);
		if (this.props.orders.length === 0) {
			this.setState({ checkListLength: 0 });
		}
	}
	render() {
		const { orders, error } = this.props;
		let content = <Loader />;
		let meg = <Loader />;
		if (error) {
			content = <ErrorMes height={{ height: '100vh' }} />;
		}
		if (orders.length > 0) {
			content = orders.map(({ id, ingredients, price }) => (
				<Order key={id} ingredients={ingredients} price={price} />
			));
		}
		if (this.state.checkListLength === 0) {
			meg = <p>no orders founds</p>;
		}
		return (
			<div>
				{/*this.state.checkListLength >= 1 ? content : meg*/}
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	orders: state.orders.orders,
	error: state.orders.error,
	token: state.auth.token,
	userId: state.auth.localId
});

const mapDispatchToProps = (dispatch) => ({
	getOrders(token, userId) {
		dispatch(fatchOrderFormDataBase(token, userId));
	}
});

export default withError(connect(mapStateToProps, mapDispatchToProps)(Orders), axios);
