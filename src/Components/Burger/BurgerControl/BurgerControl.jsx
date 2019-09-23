import React from 'react';
import Button from '../../UI/Button/ControlButton'
import './BurgerControl.scss';

const BurgerControl = ({ label, addIngredients, removeIngredients, type, disabled }) => {
	const addIng = () => addIngredients(type);
	const removeIng = () => removeIngredients(type);
	return (
		<div className="burger-control">
			<p className="burger-control__label">{label}</p>
			<div className="burger-control__button-group">
				<Button disabled={disabled} handleClick={removeIng}/>
				<Button clsName='button-plus' handleClick={addIng}/>
			</div>
		</div>
	);
};

export default BurgerControl;
