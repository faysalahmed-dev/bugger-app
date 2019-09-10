import React from 'react';
import './Button.scss'
const button = (props) => (
	<button onClick={props.handleClick} className={['button', props.type].join(' ')} disabled={props.disabled}>
		{props.name}
	</button>
);

export default button;
