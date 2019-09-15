import React from 'react';
import './Order.scss';
const order = ({ price, ingredients }) => {
	const ing = [];
	for (let key in ingredients) {
		ing.push({
			name: key,
			amount: ingredients[key]
		});
	}
	const singleIng = ing.map(({ name, amount }) => (
		<span key={Math.random().toString(36)}>
			{name} {amount}
		</span>
	));
	return (
		<div className="order__item">
			<p>ingredints: {singleIng}</p>
			<p>price : {price}</p>
		</div>
	);
};
export default order;
