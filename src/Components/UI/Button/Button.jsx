import React from 'react';
import PropType from 'prop-type'
import './Button.scss'
const button = ({ handleClick, button,children, ...othersprops}) => (
	<button onClick={handleClick} 
		className={['button', button].join(' ')} 
		{...othersprops}>
		{children}
	</button>
);
button.prototype = {
	handleClick: PropType.function,
	type: PropType.string
}

export default button;
