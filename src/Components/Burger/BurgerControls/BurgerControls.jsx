import React from 'react';
import BurgerControl from '../BurgerControl/BurgerControl';

import './BurgerControls.scss';
const Control = [
	{ type: 'cheese', label: 'Cheese' },
	{ type: 'meat', label: 'Meat' },
	{ type: 'salad', label: 'Salad' },
	{ type: 'bacon', label: 'Bacon' }
];

const BurgerControls = ({ addIngredients, removeIngredients, disabled, price, isPurchasable, purchasableMode }) => {
	return (
		<div className="burger-controls">
			<p className="burger__price">Total Price : {Math.abs(price.toFixed(2))}</p>
			{Control.map((cn) => (
				<BurgerControl
					label={cn.label}
					key={cn.label}
					addIngredients={addIngredients}
					removeIngredients={removeIngredients}
					type={cn.type}
					disabled={disabled[cn.type]}
				/>
			))}
			<button onClick={purchasableMode} disabled={!isPurchasable} className="burger__order-button">
				Order Now
			</button>
		</div>
	);
};

export default React.memo(BurgerControls);
