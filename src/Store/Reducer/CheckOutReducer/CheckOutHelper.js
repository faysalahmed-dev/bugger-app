import updateObj from '../Utility/Utility'

export function burgerCheckOutSuccess (state,action) {
     return updateObj(state, {
          price: action.price,
          ingredients: action.ingredients,
          customars: action.customars,
          error: false
     })
}