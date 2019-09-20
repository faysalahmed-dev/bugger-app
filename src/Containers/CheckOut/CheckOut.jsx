import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';
import OrderCheckOut from '../../Components/Order/OrderCheckOut/OrderCheckOut';
import Form from '../../Components/Form/Form';
class CheckOut extends Component {
	
	handleCancle = () => {
		this.props.history.goBack();
		localStorage.removeItem('burger')
	};
	handleContinue = () => {
		this.props.history.replace('/checkout/checkout-form');
	};
	render() {
		const { ingredients,price} = this.props;
		const ingredientsTest =
			ingredients || JSON.parse(localStorage.getItem('burger')).ingredients
		const Testprice = price || JSON.parse(localStorage.getItem('burger')).price
		return (
			<div>
				<OrderCheckOut
					ingredients={ingredientsTest}
					handleClick={this.handleClick}
					handleCancle={this.handleCancle}
					handleContinue={this.handleContinue}
				/>
				<Route
					exact
					path={this.props.match.path + '/checkout-form'}
					component={(option) => <Form {...option} price={Testprice} ingredients={ingredients} />}
				/>
			</div>
		);
	}
}
const mapStateToProps = ({ burgerBuilder }) => {
	return {
		ingredients: burgerBuilder.ingredients,
		price: burgerBuilder.price
	}
}

export default connect(mapStateToProps)(CheckOut);
