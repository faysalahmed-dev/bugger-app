import React, { Component } from 'react';
import SingUpForm from '../../Components/Form/SingUpForm/SingUp';
import LoginForm from '../../Components/Form/LoginForm/Login';
import burgerImg from '../../Assets/images/burger.png'
import './Authentication.scss';

class Authentication extends Component {
	state = {
		singUpPage: true
	};
	handleFormToggle = () => {
		this.setState((st) => ({
			singUpPage: !st.singUpPage
		}));
	};
	render() {
		return (
			<section className="auth__section">
				<div className="auth__section-burger">
					<img src={burgerImg} alt="burger"/>
				</div>
				{this.state.singUpPage ? (
					<SingUpForm handleFormToggle={this.handleFormToggle} history={this.props.history} />
				) : (
					<LoginForm handleFormToggle={this.handleFormToggle} history={this.props.history} />
				)}
			</section>
		);
	}
}

export default Authentication;
