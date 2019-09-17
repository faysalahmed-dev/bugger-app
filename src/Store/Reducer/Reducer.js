import * as actionType from '../Action';
const INGREDIENTS_PRICE = {
     cheese: 0.5,
     meat: 1.3,
     salad: 0.4,
     bacon: 0.5
};

const initialState = {
     ingredients: {
          salad : 1,
          bacon: 1,
          meat: 1,
          cheese: 1
     },
     price: 3.1,
}

const reducer = (state = initialState,action) => {
     // eslint-disable-next-line default-case
     switch (action.type) {
          case actionType.ADD_INGREDIENT:
               console.log(state.price + INGREDIENTS_PRICE[action.ingredient])
               return {
                    ...state,
                    ingredients : {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] + 1
                    },
                    price: state.price + INGREDIENTS_PRICE[action.ingredient]
               }
          case actionType.REMOVE_INGREDIENT : 
               return {
                    ...state,
                    ingredients: {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] - 1
                    },
                    price: state.price - INGREDIENTS_PRICE[action.ingredient]
               }
     }
     return state;
}
export default reducer;