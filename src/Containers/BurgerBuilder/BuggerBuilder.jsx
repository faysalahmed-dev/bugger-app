import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as buggerAC from '../../Store/Action/ActionCreator/index';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import Model from '../../Components/Model/Model';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios/http';
import Loader from '../../Components/UI/Loader/Loader';
import withErrorHandler from '../../Hoc/WithErrorHandler/withError';
import ErrorMes from '../../Util/ErrorMes';



class BurgerBuilder extends Component {
	state = {
		isPurchasableMode: false,
		isLoading: false,
	};
	continuePurchasable = () => {
		this.props.history.push('/checkout');
		// not for long time solution
		localStorage.setItem('burger',JSON.stringify({
			ingredients : this.props.ingredients,
			price : this.props.price
		}))
	};
	purchasableMode = () => {
		this.setState({ isPurchasableMode: true})
	}
	canclePurchasable = () => {
		this.setState({ isPurchasableMode: false })
	}
	purchaseButtonDisabled = (ings) => 
		Object.values(ings).reduce((acc, val) => acc + val) > 0;

	componentDidMount () {
		this.props.fatchIngredients()
	}
	render() {
		const {isPurchasableMode, isLoading } = this.state;
		const { error, ingredients, price, addIngredient, removeIngredient} = this.props
		const disabledInfo = {...ingredients}
		if (ingredients) {
			for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Fragment>
				{ingredients && (
					<Model show={isPurchasableMode} handleClick={this.canclePurchasable}>
						{isLoading ? (
							<Loader />
						) : (
							<OrderSummary
								ingredients={ingredients}
								canclePurchase={this.canclePurchasable}
								continuePurchase={this.continuePurchasable}
								price={price}
							/>
						)}
					</Model>
				)}
				{this.props.ingredients ? (
					<Fragment>
						<Burger ingredients={ingredients} />
						<BurgerControls
							addIngredients={addIngredient}
							removeIngredients={removeIngredient}
							disabled={disabledInfo}
							price={price}
							isPurchasable={this.purchaseButtonDisabled(ingredients)}
							purchasableMode={this.purchasableMode}
						/>
					</Fragment>
				) : error ? (
					<ErrorMes height={{ height: '100vh' }} />
				) : (
					<Loader setHeight={{ minHeight: '100vh' }}>Burger Is Loading...</Loader>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({ burgerBuilder}) => {
	return {
		ingredients: burgerBuilder.ingredients,
		price: burgerBuilder.price,
		error: burgerBuilder.error
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addIngredient(ingredient) {dispatch(buggerAC.addIngredient(ingredient))},
		removeIngredient(ingredient){dispatch(buggerAC.removeIngredient(ingredient))},
		fatchIngredients() {dispatch(buggerAC.fatchIngredients())},
	};
};

// Connect
export default 
withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);
