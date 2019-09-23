import React, { Component } from 'react';
import { withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import patten from '../regularExprission';
import FormInput from '../FormInput/FormInput';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import { authenticationSingUp } from '../../../Store/Action/ActionCreator/index';
import { FormToggleButton} from '../../UI/Ui_Uitility/Ui_Uitility'

class SingUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		isLoading: false,
		errorLog: {
			name: { isError: false, meg: 'Enter Your Name' },
			email: { isError: false, meg: 'Enter Valid Email Address' },
			password: { isError: false, meg: 'Enter Password' },
			confirmPassword: { isError: false, meg: 'Re-Type Password' }
		},
		buttonDisabled: true
	};
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value }, () => {
			this.validForm(value, name);
		});
	};
	handleSubmit = (e) => {
		const { email, password, buttonDisabled } = this.state;
		e.preventDefault();
		if (!buttonDisabled) {
			this.setState({isLoading: true}, () => {
				this.props.onSubmit(email, password);
			})
		}
	};
	buttonIsDisabled = () => {
		const { name, email, password, confirmPassword } = this.state;
		const formError = Object.values(this.state.errorLog).every((err) => err.isError === true);
		const checkError = formError || name === '' || email === '' || password === '' || confirmPassword === '';
		this.setState({ buttonDisabled: checkError });
	};
	validForm = (value, name) => {
		let reg;
		if (name === 'confirmPassword') {
			reg = this.state.password === this.state.confirmPassword;
		} else {
			reg = patten[name].test(value);
		}
		this.setState(
			{
				errorLog: {
					...this.state.errorLog,
					[name]: {
						...this.state.errorLog[name],
						isError: !reg
					}
				}
			},
			this.buttonIsDisabled
		);
	};
	render() {
		const { name, email, password, confirmPassword, isLoading, buttonDisabled } = this.state;
		const {
			name: nameEr,
			email: emailEr,
			password: passwordEr,
			confirmPassword: confirmPasswordEr
		} = this.state.errorLog;
		

		let redir = <Redirect to="/" />
		if(localStorage.getItem('burger')) {
			redir = <Redirect to="/checkout" />
		}
		return (
			<React.Fragment>
				{isLoading ? (
					<Loader />
				) : (
					<form className="form" onSubmit={this.handleSubmit}>
							{this.props.auth ? redir : null}
						<h1>Sing Up</h1>
						<div className="form__container">
							<FormInput
								label="Name"
								handleChange={this.handleChange}
								name="name"
								value={name}
								type="text"
								error={nameEr.isError}
								meg={nameEr.meg}
							/>
							<FormInput
								label="Email"
								handleChange={this.handleChange}
								name="email"
								value={email}
								type="email"
								error={emailEr.isError}
								meg={emailEr.meg}
							/>
						</div>
						<div className="form__container">
							<FormInput
								label="Password"
								handleChange={this.handleChange}
								name="password"
								value={password}
								type="text"
								error={passwordEr.isError}
								meg={passwordEr.meg}
							/>
							<FormInput
								label="Re-Type Password"
								handleChange={this.handleChange}
								name="confirmPassword"
								value={confirmPassword}
								type="text"
								error={confirmPasswordEr.isError}
								meg={confirmPasswordEr.meg}
							/>
						</div>
						<FormToggleButton handleClick={this.props.handleFormToggle}>
							i already have an account
						</FormToggleButton>
						<div className="form__button-group">
								<Button button="primary-outline button-sm rounded" type="submit" disabled={buttonDisabled}>
								SingUp
							</Button>
								<Button button="primary-outline button-sm rounded" handleClick={this.props.history.goBack} type="button">
								Cancle
							</Button>
						</div>
					</form>
				)}
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth.token != null
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit(email, password) {
			dispatch(authenticationSingUp(email, password));
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingUpForm));
