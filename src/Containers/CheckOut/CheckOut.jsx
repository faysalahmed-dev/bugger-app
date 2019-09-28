import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import OrderCheckOut from '../../Components/Order/OrderCheckOut/OrderCheckOut';
import Form from '../../Components/Form/Form';
import './CheckOut.scss';
class CheckOut extends Component {
	state ={
		showButton: true
	}
	handleCancle = () => {
		this.props.history.goBack();
		localStorage.removeItem('burger');
	};
	handleContinue = () => {
		this.setState({showButton: false}, () => {
			this.props.history.replace('/checkout/checkout-form');
		})
	};
	render() {
		const { ingredients, price } = this.props;
		const ingredientsTest = ingredients || JSON.parse(localStorage.getItem('burger')).ingredients;
		const Testprice = price || JSON.parse(localStorage.getItem('burger')).price;
		return (
			<div className="checkout__container">
				<OrderCheckOut
					ingredients={ingredientsTest}
					handleClick={this.handleClick}
					handleCancle={this.handleCancle}
					handleContinue={this.handleContinue}
					showButton={this.state.showButton}
				/>
				<Route exact 
					path={this.props.match.path + '/checkout-form'}
					component={(option) => (
						<div className="order-checkout__form">
							<Form {...option} price={Testprice} ingredients={ingredients} />
						</div>)}
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

