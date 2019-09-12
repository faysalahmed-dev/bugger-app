import React from 'react';
import PropType from 'prop-type'
import './Button.scss'
const button = (props) => (
	<button onClick={props.handleClick} className={['button', props.type].join(' ')} disabled={props.disabled}>
		{props.children}
	</button>
);
button.prototype = {
	handleClick: PropType.function,
	type: PropType.string
}

export default button;
