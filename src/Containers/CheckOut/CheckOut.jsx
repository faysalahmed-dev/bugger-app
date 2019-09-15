import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import OrderCheckOut from '../../Components/Order/OrderCheckOut/OrderCheckOut';
import Form from '../../Components/Form/Form';
class CheckOut extends Component {
	state = {
		ingredients: {},
		price: 3.1
	};
	componentDidMount() {
		// "?bacon=1&cheese=1&meat=1&salad=2"
		const url = this.props.location.search
			.substring(1) //'bacon=1&cheese=1&meat=1&salad=2'
			.split('&') // ['bacon=1','cheese=1','meat=1','salad=2']
			.map((link) => link.split('=')); // [['bacon','1'],['cheese','1'],['meat','1'],['salad','2']]
		const ingredients = {}; // empty obj
		for (let i = 0; i < url.length; i++) {
			if (url[i][0] === 'price') {
				this.setState({ price: +[ url[i][1] ] });
			} else {
				ingredients[url[i][0]] = +url[i][1]; // {bacon: 1}
			}
		}
          this.setState({ ingredients });
	}
	handleCancle = () => {
		this.props.history.goBack();
	};
	handleContinue = () => {
		this.props.history.replace('/checkout/checkout-form');
	};
	render() {
		return (
			<div>
				<OrderCheckOut
					ingredients={this.state.ingredients}
					handleClick={this.handleClick}
					handleCancle={this.handleCancle}
					handleContinue={this.handleContinue}
				/>
				<Route
					exact
					path={this.props.match.path + '/checkout-form'}
					render={(props) => (
						<Form {...props} ingredients={this.state.ingredients} price={this.state.price} />
					)}
				/>
			</div>
		);
	}
}
export default CheckOut;
