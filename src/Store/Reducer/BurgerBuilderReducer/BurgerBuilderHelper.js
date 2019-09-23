import updataObject from '../Utility/Utility'
import ingPrice from '../ingPrice'

export function addIngredients (state,action) {
     return updataObject(state, {
          ingredients: {
               ...state.ingredients,
               [action.ingredient]: state.ingredients[action.ingredient] + 1
          },
          price: state.price + ingPrice[action.ingredient],
     })
}

export function removeIngredients (state,action) {
     return updataObject(state, {
          ingredients: {
               ...state.ingredients,
               [action.ingredient]: state.ingredients[action.ingredient] - 1
          },
          price: state.price - ingPrice[action.ingredient],
     })
}

export function fatchIng(state,action) {
     return updataObject(state, {
          ingredients: {
               salad: action.ingredients.salad,
               bacon: action.ingredients.bacon,
               cheese: action.ingredients.cheese,
               meat: action.ingredients.meat
          },
          price: 3.1,
          error: false
     })
}