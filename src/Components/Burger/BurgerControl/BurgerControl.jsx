import React from 'react';
import './BurgerControl.scss';

const BurgerControl = ({ label, addIngredients, removeIngredients, type, disabled }) => {
	const addIng = () => addIngredients(type);
	const removeIng = () => removeIngredients(type);
	return (
		<div className="burger-control">
			<p className="burger-control__label">{label}</p>
			<div>
				<button className="burger-control__button" onClick={removeIng} disabled={disabled}>
					Less
				</button>
				<button className="burger-control__button" onClick={addIng}>
					More
				</button>
			</div>
		</div>
	);
};

export default BurgerControl;
