import React from 'react';
import logo from '../../../Assets/images/burger-logo.svg';
import './Logo.scss'

const Logo = () => {
	return (
	<div className="burger-builder-logo">
		<img src={logo} alt="burger builder" />
	</div>
)};

export default Logo;
