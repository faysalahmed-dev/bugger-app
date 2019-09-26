import React,{memo} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'
import BurgerIng from './BurgerIng/BurgerIng';
import './Burger.scss';
const Burger = ({ ingredients }) => {
	let ingredientsTransform = Object.keys(ingredients)
		.map((ingKey) => {
			return [ ...Array(ingredients[ingKey]) ].map((_, i) => {
				return (
					<CSSTransition key={ingKey + i} 
						timeout={500} classNames='fade'>
						<BurgerIng type={ingKey} />
					</CSSTransition>
				);
			});
		})
		.flat();
	// .reduce((acc,val) => {
	//      return acc.concat(val)
	// })
	if (ingredientsTransform.length === 0) ingredientsTransform = <p className="aleart">please add ingredients</p>;
	return (
		<div className="burger">
			<TransitionGroup component={null}>
				<BurgerIng type="bread-top" />
					{ingredientsTransform}
				<BurgerIng type="bread-bottom" />
			</TransitionGroup>
		</div>
	);
};
Burger.propTypes = {
	ingredients : PropTypes.object.isRequired
}


export default memo(Burger);
