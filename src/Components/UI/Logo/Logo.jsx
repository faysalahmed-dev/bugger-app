import React from 'react';
import logo from '../../../Assets/images/burger-logo.png';
import './Logo.scss'

const Logo = () => (
	<div className="burger-builder-logo">
		<img src={logo} alt="burger builder" />
	</div>
);

export default Logo;
