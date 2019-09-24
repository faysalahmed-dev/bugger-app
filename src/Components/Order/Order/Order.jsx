import React from 'react';
import PropTypes from 'prop-types'
import './Order.scss';
const order = ({ price, ingredients }) => {
	const ing = [];
	for (let key in ingredients) {
		ing.push({
			ingName: key,
			amount: ingredients[key]
		});
	}
	const singleIng = ing.map(({ ingName, amount }) => (
		<li className="order__list-item" key={Math.random()}>
			<span className="order__list-item_ing">{ingName} </span> :
			<span className="order__list-item_amount"> {amount}</span>
		</li>
	));
	return (
		<div className="order__item">
			<div className="order__burger"></div>
			<ul className="order__list">
				{singleIng}
			</ul>
			<h3 className="order__item-price">${price}</h3>
		</div>
	);
};
order.propTypes = {
	ingredients: PropTypes.object.isRequired,
	price: PropTypes.string.isRequired || PropTypes.number.isRequired
}


export default order;
