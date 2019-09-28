import React, { Component, useState } from 'react';
import {CSSTransition} from 'react-transition-group'
import SingUpForm from '../../Components/Form/SingUpForm/SingUp';
import LoginForm from '../../Components/Form/LoginForm/Login';
import burgerImg from '../../Assets/images/burger.png'
import './Authentication.scss';


const Authentication = (props) => {
	const [singUpPage,setSingUpPage] = useState(true)
	
	const handleFormToggle = () => setSingUpPage(!singUpPage);

	return (
		<section className="auth__section">
			<div className="auth__section-burger">
				<img src={burgerImg} alt="burger"/>
			</div>
			<div className="auth__section__form">
				{singUpPage ? (
					<CSSTransition in={singUpPage} timeout={1000} classNames='singup-form' >
						<SingUpForm handleFormToggle={handleFormToggle} history={props.history} />
					</CSSTransition> 
				) : (
					<CSSTransition in={singUpPage} timeout={1000} classNames='login-form' >
						<LoginForm handleFormToggle={handleFormToggle} history={props.history} />
					</CSSTransition>
				)}
			</div>
		</section>
	);
}

export default Authentication;
