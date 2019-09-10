import React,{memo} from 'react';
import BurgerIng from './BurgerIng/BurgerIng';
import './Burger.scss';
const Burger = ({ ingredients }) => {
	let ingredientsTransform = Object.keys(ingredients)
		.map((ingKey) => {
			return [ ...Array(ingredients[ingKey]) ].map((_, i) => {
				return <BurgerIng type={ingKey} key={ingKey + i} />;
			});
		})
		.flat();
	// .reduce((acc,val) => {
	//      return acc.concat(val)
	// })
	if (ingredientsTransform.length === 0) ingredientsTransform = <p className="aleart">please add ingredients</p>;
	return (
		<div className="burger">
			<BurgerIng type="bread-top" />
			{ingredientsTransform}
			<BurgerIng type="bread-bottom" />
		</div>
	);
};

export default memo(Burger);
