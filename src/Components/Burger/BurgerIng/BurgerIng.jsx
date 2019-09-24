import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIng.scss';
import burgerTop from '../../../Assets/images/Burger/burger-top.png';
import burgerBottom from '../../../Assets/images/Burger/burger-bottom.png';
import chesse from '../../../Assets/images/Burger/chesse.png';
import meat from '../../../Assets/images/Burger/meat.png';
import salad from '../../../Assets/images/Burger/salad.png';
import bacon from '../../../Assets/images/Burger/bacon.png';

const BurgerIng = ({ type }) => {
	let ing;
	switch (type) {
		case 'bread-top':
			ing = (
				<div className="burger__top burger__part">
					<img src={burgerTop} alt="burgerTop" />
				</div>
			);
			break;
		case 'bread-bottom':
			ing = (
				<div className="burger__bottom burger__part">
					<img src={burgerBottom} alt="burgerBottom" />
				</div>
			);
			break;
		case 'meat':
			ing = (
				<div className="burger__meat burger__part">
					<img src={meat} alt="meat" />
				</div>
			);
			break;
		case 'cheese':
			ing = (
				<div className="burger__chesse burger__part">
					<img src={chesse} alt="chesse" />
				</div>
			);
			break;
		case 'salad':
			ing = (
				<div className="burger__salad burger__part">
					<img src={salad} alt="salad" />
				</div>
			);
			break;
		case 'bacon':
			ing = (
				<div className="burger__bacon burger__part">
					<img src={bacon} alt="bacon" />
				</div>
			);
			break;
		default:
			ing = null;
	}
	return ing;
};
BurgerIng.propTypes = {
	type: PropTypes.string
};
export default BurgerIng;

// const BurgerIng = ({ type }) => {
// 	let ing;
// 	switch (type) {
// 		case 'bread-top':
// 			ing = (<div className="bread-top">
// 				<div className="seeds1"></div>
// 				<div className="seeds2"></div>
// 			</div>);
// 			break;
// 		case 'bread-bottom':
// 			ing = <div className="bread-bottom" />;
// 			break;
// 		case 'meat':
// 			ing = <div className="meat" />;
// 			break;
// 		case 'cheese':
// 			ing = <div className="cheese" />;
// 			break;
// 		case 'salad':
// 			ing = <div className="salad" />;
// 			break;
// 		case 'bacon':
// 			ing = <div className="bacon" />;
// 			break;
// 		default:
// 			ing = null;
// 	}
// 	return ing;
// };
// BurgerIng.prototype = {
// 	type: PropTypes.string
// }
// export default BurgerIng;
