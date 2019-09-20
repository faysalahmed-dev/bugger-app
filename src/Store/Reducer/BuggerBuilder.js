import * as actionType from '../Action/ActionType';
import updataObject from './Utility/Utility'
const INGREDIENTS_PRICE = {
     cheese: 0.5,
     meat: 1.3,
     salad: 0.4,
     bacon: 0.5
};

const initialState = {
     ingredients:null,
     price: 3.1,
     error: false
}

const burgerBuilderReducer = (state = initialState, action) => {
     // eslint-disable-next-line default-case
     switch (action.type) {
          case actionType.ADD_INGREDIENT:
               return updataObject(state, {
                    ingredients: {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] + 1
                    },
                    price: state.price + INGREDIENTS_PRICE[action.ingredient],
               })
          case actionType.REMOVE_INGREDIENT:
               return updataObject(state, {
                    ingredients: {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] - 1
                    },
                    price: state.price + INGREDIENTS_PRICE[action.ingredient],
               })
          case actionType.FATCH_INGREDIENT:
               return updataObject (state, {
                    ingredients: {
                         salad: action.ingredients.salad,
                         bacon: action.ingredients.bacon,
                         cheese: action.ingredients.cheese,
                         meat: action.ingredients.meat
                    },
                    price: 3.1,
                    error: false
               })
          case actionType.FATCH_FAILD : 
               return updataObject(state, {error: true})
     }
     return state;
}
export default burgerBuilderReducer;