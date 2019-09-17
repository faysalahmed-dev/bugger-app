import * as actionType from '../Action';

const initialState = {
     ingredients: {
          salad : 1,
          bacon: 1,
          meat: 1,
          sheese: 1
     },
     price: 3.1,
}

const reducer = (state = initialState,action) => {
     // eslint-disable-next-line default-case
     switch (action.type) {
          case actionType.ADD_INGREDIENT:
               return {
                    ...state,
                    ingredients : {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] + 1
                    }
               }
          case actionType.REMOVE_INGREDIENT : 
               return {
                    ...state,
                    ingredients: {
                         ...state.ingredients,
                         [action.ingredient]: state.ingredients[action.ingredient] - 1
                    }
               }
     }
     return state;
}
export default reducer;