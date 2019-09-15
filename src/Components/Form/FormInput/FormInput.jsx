import React from 'react';
import './FormInput.scss';

const Input = ({ label, handleChange, error, meg, ...otherProps }) => {
	return (
		<div className="form__input-group">
			<input
				{...otherProps}
				onChange={handleChange}
				className={`form__input ${error && 'invalid'}`}
				id={otherProps.name}
                    autoComplete="new-password"
			/>
			{label && (
				<label htmlFor={otherProps.name} className={`form__label ${otherProps.value.length && 'input-active'}`}>
					{label}
				</label>
			)}
			{error ? <p className="invalid-text">{meg}</p> : null}
		</div>
	);
};

export default Input;
