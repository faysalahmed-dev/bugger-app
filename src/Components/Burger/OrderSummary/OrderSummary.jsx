import React from 'react';
import Button from '../../UI/Buttton/Button';
import './OrderSummary.scss';

const OrderSummary = ({ ingredients, canclePurchase, continuePurchase, price }) => {
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
				<Button name="Cancle" type="primary" handleClick={canclePurchase}/>
				<Button name="Continue" type="secondary" handleClick={continuePurchase}/>
			</div>
		</React.Fragment>
	);
};

export default OrderSummary;
