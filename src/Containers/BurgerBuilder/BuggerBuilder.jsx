import React, { Component, Fragment } from 'react';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BurgerControls/BurgerControls';
import Model from '../../Components/Model/Model';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios/http';
import Loader from '../../Components/UI/Loader/Loader';
import withErrorHandler from '../../Hoc/WithErrorHandler/withError';

const PRICE_INGREDIENTS = {
	cheese: 0.5,
	meat: 1.3,
	salad: 0.4,
	bacon: 0.5
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 1,
			meat: 1,
			salad: 2,
			bacon: 1
		},
		price: 3.1,
		isPurchasable: true,
		isPurchasableMode: false,
		isLoading: false
	};
	handlePurchasable = (purchasableInfo) => {
		const sum = Object.values(purchasableInfo).reduce((acc, val) => {
			acc = acc + val;
			return acc;
		});
		this.setState({ isPurchasable: sum > 0 });
	};
	addIngredientsHandler = (type) => {
		// type = meat
		const oldCount = this.state.ingredients[type]; //0
		const updateCount = oldCount + 1; // 1
		const upDateIngredients = { ...this.state.ingredients };
		upDateIngredients[type] = updateCount; // 1

		const PriceAdd = PRICE_INGREDIENTS[type]; //1.3
		const oldPrice = this.state.price; // 2.5
		const upDatePrice = oldPrice + PriceAdd;

		this.setState({ ingredients: upDateIngredients, price: upDatePrice });
		this.handlePurchasable(upDateIngredients);
	};
	removeIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type]; //0
		if (oldCount <= 0) return;
		const updateCount = oldCount - 1; // 1
		const upDateIngredients = { ...this.state.ingredients };
		upDateIngredients[type] = updateCount; // 1

		const PriceSub = PRICE_INGREDIENTS[type]; //1.3
		const oldPrice = this.state.price; // 2.5
		const upDatePrice = oldPrice - PriceSub;

		this.setState({ ingredients: upDateIngredients, price: upDatePrice });
		this.handlePurchasable(upDateIngredients);
	};
	purchasableMode = () => this.setState({ isPurchasableMode: true });

	canclePurchasable = () => this.setState({ isPurchasableMode: false });

	continuePurchasable = () => {
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.price,
			customar: {
				name: 'faysal ahmed',
				address: 'test address',
				city: 'chittagong',
				zipCode: 4000,
				email: 'faysalahmed146@gmail.com'
			}
		};
		this.setState({ isLoading: true }, () => {
			axios
				.post('/orders.json', order)
				.then(() =>{ 
					this.setState({ isLoading: false, isPurchasableMode: false })})
				.catch(() => {
					this.setState({ isLoading: false, isPurchasableMode: false });
				});
		});
	};

	render() {
		const { ingredients, price, isPurchasable, isPurchasableMode, isLoading } = this.state;
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

		return (
			<Fragment>
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
				<Burger ingredients={ingredients} />
				<BurgerControls
					addIngredients={this.addIngredientsHandler}
					removeIngredients={this.removeIngredientsHandler}
					disabled={disabledInfo}
					price={price}
					isPurchasable={isPurchasable}
					purchasableMode={this.purchasableMode}
				/>
			</Fragment>
		);
	}
}
export default withErrorHandler(BurgerBuilder, axios);
