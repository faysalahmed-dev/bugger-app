import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../Store/Action';
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
		error: false
	};
	continuePurchasable = () => {
		this.props.history.push('/checkout');
	};
	purchasableMode = () => {
		this.setState({ isPurchasableMode: true})
	}
	canclePurchasable = () => {
		this.setState({ isPurchasableMode: false })
	}
	purchaseButtonDisabled = (ings) => 
		Object.values(ings).reduce((acc, val) => acc + val) > 0;

	/*componentDidMount() {
		axios.get('/ingredients.json').then((data) => this.setState({ ingredients: data.data })).catch(() => this.setState({error: true}))
	}*/
	render() {
		const {isPurchasableMode, isLoading,error } = this.state;
		const disabledInfo = {...this.props.ingredients}
		if (this.props.ingredients) {
			for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Fragment>
				{this.props.ingredients && (
					<Model show={isPurchasableMode} handleClick={this.canclePurchasable}>
						{isLoading ? (
							<Loader />
						) : (
							<OrderSummary
								ingredients={this.props.ingredients}
								canclePurchase={this.canclePurchasable}
								continuePurchase={this.continuePurchasable}
								price={this.props.price}
							/>
						)}
					</Model>
				)}
				{this.props.ingredients ? (
					<Fragment>
						<Burger ingredients={this.props.ingredients} />
						<BurgerControls
							addIngredients={this.props.addIngredients}
							removeIngredients={this.props.removeIngredients}
							disabled={disabledInfo}
							price={this.props.price}
							isPurchasable={this.purchaseButtonDisabled(this.props.ingredients)}
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

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients,
		price: state.price
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addIngredients: (ingredient) => dispatch({ type: actionType.ADD_INGREDIENT, ingredient }),
		removeIngredients: (ingredient) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredient })
	};
};

// Connect
export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);
