import React from 'react';
import Button from '../../UI/Button/ControlButton'
import PropTypes from 'prop-types'
import './BurgerControl.scss';


const BurgerControl = ({ label, addIngredients, removeIngredients, type, ing,max }) => {
	const addIng = () => addIngredients(type);
	const removeIng = () => removeIngredients(type);
	return (
		<div className="burger-control">
			<p className="burger-control__label">{label}</p>
			<div className="burger-control__button-group">
				<Button disabled={ing <= 0 ? true : false} handleClick={removeIng}/>
				<Button disabled={ing >= max ? true : false} clsName='button-plus' handleClick={addIng}/>
			</div>
		</div>
	);
};

BurgerControl.propTypes = {
	addIngredients : PropTypes.func.isRequired,
	removeIngredients: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	ing: PropTypes.number.isRequired,
	max:PropTypes.number.isRequired
}

export default BurgerControl;
