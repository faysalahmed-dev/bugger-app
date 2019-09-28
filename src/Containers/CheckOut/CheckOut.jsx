import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import OrderCheckOut from '../../Components/Order/OrderCheckOut/OrderCheckOut';
import Form from '../../Components/Form/Form';
import './CheckOut.scss';

const CheckOut = props => {
	const [showButton,setShowButton] = useState(true)
	
	const { ingredients, price } = props;
	const ingredientsTest = ingredients || JSON.parse(localStorage.getItem('burger')).ingredients;
	const Testprice = price || JSON.parse(localStorage.getItem('burger')).price;


	const handleCancle = () => {
		props.history.goBack();
		localStorage.removeItem('burger');
	};
	const handleContinue = () => {
		setShowButton(false);
		props.history.replace('/checkout/checkout-form');
	};
		
	return (
		<div className="checkout__container">
			<OrderCheckOut
				ingredients={ingredientsTest}
				handleCancle={handleCancle}
				handleContinue={handleContinue}
				showButton={showButton}
			/>
			<Route exact 
				path={props.match.path + '/checkout-form'}
				component={(option) => (
					<div className="order-checkout__form">
						<Form {...option} price={Testprice} ingredients={ingredients} />
					</div>)}
				/>
		</div>
	);
}


const mapStateToProps = ({ burgerBuilder }) => {
	return {
		ingredients: burgerBuilder.ingredients,
		price: burgerBuilder.price
	}
}

export default connect(mapStateToProps)(CheckOut);

