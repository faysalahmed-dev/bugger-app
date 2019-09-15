import React, { Component } from 'react';
import axios from '../../axios/http';
import FomrInput from './FormInput/FormInput';
import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';
import './Form.scss';

const patten = {
	name: /^[a-zA-Z\s]{2,15}$/,
	email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	number: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/,
	zipcode: /^[0-9]{4,6}$/,
	city: /^[a-zA-Z\s]{2,10}$/,
	street: /[\w\W]{2,30}/
};
// email formate
class CheckoutForm extends Component {
	state = {
		name: '',
		email: '',
		number: '',
		zipcode: '',
		street: '',
		city: '',
		isLoading: false,
		errorLog: {
			name: { isError: false, meg: 'Enter Your Name' },
			email: { isError: false, meg: 'Enter Valid Email Address' },
			number: { isError: false, meg: 'Enter Valid Phone Number' },
			zipcode: { isError: false, meg: 'Enter Zip Code/Postal Code' },
			street: { isError: false, meg: 'Enter Your Address..' },
			city: { isError: false, meg: 'Enter City' }
		},
		buttonDisabled: true
	};
	handleChange = (e) => {
		const { value, name } = e.target;
		if (name === 'zipcode' || name === 'number') {
			if (/^[0-9]+$/.test(value.trim()) || value.trim() === '') {
				this.setState({ [name]: value.trim() }, () => {
					this.validForm(value.trim(), name);
				});
			}
		} else {
			this.setState({ [name]: value }, () => {
				this.validForm(value, name);
			});
		}
	};
	handleSubmit = (e) => {
		const { name, email, city, zipcode, number, street,buttonDisabled } = this.state;
		e.preventDefault();
		if (!buttonDisabled) {
			const order = {
				ingredients: this.props.ingredients,
				price: this.props.price,
				customars: {
					name,
					email,
					number,
					street,
					city,
					zipcode
				}
			};
			this.setState({ isLoading: true }, () => {
				axios
					.post('/orders.json', order)
					.then(() => {
						this.setState({ isLoading: false });
					})
					.catch(() => {
						this.setState({ isLoading: false });
					});
			});
		}
	};
	buttonIsDisabled = () => {
		const { name, email, street, city, zipcode, number } = this.state;
		const errorInfo = { ...this.state.errorLog };
		const er = new Set()
		for (let key in errorInfo) {
			er.add(errorInfo[key].isError)
		}
		const error =
			er.has(true) ||
			name === '' ||
			email === '' ||
			zipcode === '' ||
			city === '' ||
			street === '' ||
			number === ''
		this.setState({ buttonDisabled: error })
	}
	validForm = (value, name) => {
		const reg = patten[name].test(value);
		this.setState({
			errorLog: {
				...this.state.errorLog,
				[name]: {
					...this.state.errorLog[name],
					isError: !reg
				}
			}
		},this.buttonIsDisabled);
	};

	handleCancle = () => {
		this.props.history.goBack();
	};
	render() {
		const { name, email, street, city, zipcode, number, isLoading, buttonDisabled } = this.state;
		const {
			name: nameEr,
			email: emailEr,
			street: streetEr,
			city: cityEr,
			zipcode: zipcodeEr,
			number: numberEr
		} = this.state.errorLog;
		
		return (
			<div>
				{isLoading ? (
					<Loader />
				) : (
					<form className="form" onSubmit={this.handleSubmit}>
						<h1>Check Out Form</h1>
						<div className="form__container">
							<FomrInput
								label="Name"
								handleChange={this.handleChange}
								name="name"
								value={name}
								type="text"
								error={nameEr.isError}
								meg={nameEr.meg}
							/>
							<FomrInput
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
							<FomrInput
								label="Number"
								handleChange={this.handleChange}
								name="number"
								value={number}
								type="text"
								error={numberEr.isError}
								meg={numberEr.meg}
							/>
							<FomrInput
								label="Zip Code"
								handleChange={this.handleChange}
								name="zipcode"
								value={zipcode}
								type="text"
								error={zipcodeEr.isError}
								meg={zipcodeEr.meg}
							/>
						</div>
						<div className="form__container">
							<FomrInput
								label="Address"
								handleChange={this.handleChange}
								name="street"
								value={street}
								type="text"
								error={streetEr.isError}
								meg={streetEr.meg}
							/>
							<FomrInput
								label="City"
								handleChange={this.handleChange}
								name="city"
								value={city}
								type="text"
								error={cityEr.isError}
								meg={cityEr.meg}
							/>
						</div>
						<div className="form__button-group">
								<Button button="primary-outline button-sm" type="submit" disabled={buttonDisabled}>
								Check out
							</Button>
							<Button button="primary-outline button-sm" handleClick={this.handleCancle} type="button">
								Cancle
							</Button>
						</div>
					</form>
				)}
			</div>
		);
	}
}
export default CheckoutForm;
