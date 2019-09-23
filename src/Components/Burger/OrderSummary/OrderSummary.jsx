import React from 'react';
import Button from '../../UI/Button/Button';
import './OrderSummary.scss';

const OrderSummary = ({ ingredients, canclePurchase, orderCheckOut, price, auth }) => {
	const orderSummary = Object.keys(ingredients).map((key) => (
		<li key={key}>
			<span>{key}</span> : <span>{ingredients[key]}</span>
		</li>
	));
	return (
		<React.Fragment>
			<div>
				<h3 className="order-summary__title">Your Order</h3>
				<p className="order-summary__sub-title">A delicious bugger with follwing ingredients :</p>
			</div>
			<ul className="order-summary__list">{orderSummary}</ul>
			<p className="order-summary__text" >Total Price : {price.toFixed(2)}</p>
			<div className="order-summary__button-group">
				<Button type="primary" handleClick={canclePurchase}>Cancle</Button>
				<Button type="secondary" handleClick={orderCheckOut}>
					{auth ?'Continue': 'SingUp/Login'}
				</Button>
			</div>
		</React.Fragment>
	);
};

export default OrderSummary;
