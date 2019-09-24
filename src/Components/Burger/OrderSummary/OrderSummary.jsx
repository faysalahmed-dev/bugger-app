import React from 'react';
import ingPrice from '../../../Base/ingPrice';
import Button from '../../UI/Button/Button';

import meat from '../../../Assets/images/Burger/meat.png';
import cheese from '../../../Assets/images/Burger/chesse.png';
import salad from '../../../Assets/images/Burger/salad.png';
import bacon from '../../../Assets/images/Burger/bacon.png';

import './OrderSummary.scss';

const imgObj = {
	meat,
	cheese,
	salad,
	bacon
};
const totalPrice = (ingAmount,ingPrice) => {
	return (ingAmount * ingPrice).toFixed(2);
}

const OrderSummary = ({ ingredients, canclePurchase, orderCheckOut, price, auth }) => {
	const orderSummary = Object.keys(ingredients).map((key) => (
		<tr key={key} className="order-summary__row">
			<td className="order-summary__td">
				<img src={imgObj[key]} alt="" />
			</td>
			<td className="order-summary__td">{key}</td>
			<td className="order-summary__td">{ingredients[key]}</td>
			<td className="order-summary__td">{ingPrice[key]}</td>
			<td className="order-summary__td">$ {totalPrice(ingredients[key], ingPrice[key])}</td>
		</tr>
	));
	return (
		<React.Fragment>
			<div className="order-summary__header">
				<h3 className="order-summary__title">Your Order</h3>
				<p className="order-summary__sub-title">A delicious bugger with follwing ingredients :</p>
			</div>
			<table className="order-summary__table">
				<thead>
					<tr>
						<th></th>
						<th>Ingredient</th>
						<th>Amount</th>
						<th>Price</th>
						<th>Total Price</th>
					</tr>
				</thead>
				<tbody>{orderSummary}</tbody>
			</table>
			<p className="order-summary__text">Total Price : {price.toFixed(2)}</p>
			<div className="order-summary__button-group">
				<Button button="primary-outline button-sm rounded" handleClick={canclePurchase}>
					Cancle
				</Button>
				<Button button="primary-outline button-md rounded" handleClick={orderCheckOut}>
					{auth ? 'Continue' : 'SingUp/Login'}
				</Button>
			</div>
		</React.Fragment>
	);
};

export default OrderSummary;
