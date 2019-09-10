import React from 'react';
import PropTypes from 'prop-type'
import './BurgerIng.css';

const BurgerIng = ({ type }) => {
	let ing;
	switch (type) {
		case 'bread-top':
			ing = <div className="bread-top" />;
			break;
		case 'bread-bottom':
			ing = <div className="bread-bottom" />;
			break;
		case 'seeds1':
			ing = <div className="seeds1" />;
			break;
		case 'seeds2':
			ing = <div className="seeds2" />;
			break;
		case 'meat':
			ing = <div className="meat" />;
			break;
		case 'cheese':
			ing = <div className="cheese" />;
			break;
		case 'salad':
			ing = <div className="salad" />;
			break;
		case 'bacon':
			ing = <div className="bacon" />;
			break;
		default:
			ing = null;
	}
	return ing;
};
BurgerIng.prototype = {
	type: PropTypes.string
}
export default BurgerIng;
