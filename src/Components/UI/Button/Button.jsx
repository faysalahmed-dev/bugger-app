import React from 'react';
import PropTypes from 'prop-types'
import './Button.scss'
const button = ({ handleClick, button,children, ...othersprops}) => (
	<button onClick={handleClick} 
		className={['button', button].join(' ')} 
		{...othersprops}>
		{children}
	</button>
);
button.protoTypes = {
	handleClick: PropTypes.func,
	type: PropTypes.string
}

export default button;
