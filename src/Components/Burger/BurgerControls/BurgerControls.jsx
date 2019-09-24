import React from 'react';
import BurgerControl from '../BurgerControl/BurgerControl';

import './BurgerControls.scss';
const Control = [
	{ type: 'cheese', label: 'Cheese',max: 3 },
	{ type: 'meat', label: 'Meat', max: 3 },
	{ type: 'salad', label: 'Salad', max: 2 },
	{ type: 'bacon', label: 'Bacon', max:2 }
];

const BurgerControls = ({ addIngredients, removeIngredients, ingredients, price, isPurchasable, purchasableMode }) => {
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
					ing={ingredients[cn.type]}
					max={cn.max}
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
