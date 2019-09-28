import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group'
import * as buggerAC from '../../Store/Action/ActionCreator/index';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import Model from '../../Components/Model/Model';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios/http';
import Loader from '../../Components/UI/Loader/Loader';
import withErrorHandler from '../../Hoc/WithErrorHandler/withError';
import ErrorMes from '../../Util/ErrorMes';


import './BurgerBuilder.scss'

class BurgerBuilder extends Component {
	state = {
		openModel: false,
		isLoading: false
	};
	handleCheckOrderOut = () => {
		if (!this.props.auth) {
			this.props.history.push('/authentication');
		} else {
			this.props.history.push('/checkout');
		}
		// not for long time solution
		localStorage.setItem(
			'burger',
			JSON.stringify({
				ingredients: this.props.ingredients,
				price: this.props.price
			})
		);
	};
	openModelHandler = () => {
		this.setState({ openModel: true });
	};
	closeModelHandler = () => {
		this.setState({ openModel: false });
	};
	purchaseButtonDisabled = (ings) => Object.values(ings).reduce((acc, val) => acc + val) > 0;

	componentDidMount() {
		this.props.fatchIngredients();
	}
	render() {
		const { openModel, isLoading } = this.state;
		const { error, ingredients, price, addIngredient, removeIngredient, auth } = this.props;

		return (
			<Fragment>
				<CSSTransition classNames="model" timeout={400} in={openModel} mountOnEnter unmountOnExit>
					<Model show={openModel} handleClick={this.closeModelHandler}>
						{isLoading ? (
							<Loader />
						) : (
								<OrderSummary
									ingredients={ingredients}
									auth={auth}
									price={price}
									canclePurchase={this.closeModelHandler}
									orderCheckOut={this.handleCheckOrderOut}
								/>
							)}
					</Model>
				</CSSTransition>	
				{ingredients ? (
					<div className="burger-main__conatiner">
						<Burger ingredients={ingredients} />
						<BurgerControls
							addIngredients={addIngredient}
							removeIngredients={removeIngredient}
							ingredients={ingredients}
							price={price}
							isPurchasable={this.purchaseButtonDisabled(ingredients)}
							purchasableMode={this.openModelHandler}
						/>
					</div>
				) : error ? (
					<ErrorMes height={{ height: '100vh' }} />
				) : (
					<Loader setHeight={{ minHeight: '100vh' }}>Burger Is Loading...</Loader>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({ burgerBuilder, auth }) => {
	return {
		ingredients: burgerBuilder.ingredients,
		price: burgerBuilder.price,
		error: burgerBuilder.error,
		auth: auth.token != null
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addIngredient(ingredient) {
			dispatch(buggerAC.addIngredient(ingredient));
		},
		removeIngredient(ingredient) {
			dispatch(buggerAC.removeIngredient(ingredient));
		},
		fatchIngredients() {
			dispatch(buggerAC.fatchIngredients());
		}
	};
};

// Connect
export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);
