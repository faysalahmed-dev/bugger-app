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
			<p className="burger__price">Total Price  
				<span>
					{Math.abs(price.toFixed(2))}
				</span>
			</p>
			<div className="burger-wrapper">
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
			<button onClick={purchasableMode} 
				disabled={!isPurchasable} className="burger__order-button">
					<span>
						Order Now
					</span>
					<span>
						${Math.abs(price.toFixed(2))}
					</span>
			</button>
			</div>
		</div>
	);
};

export default React.memo(BurgerControls);
