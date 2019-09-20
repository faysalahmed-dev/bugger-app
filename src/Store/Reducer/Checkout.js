import * as actionType from '../Action/ActionType';
import updateObj from './Utility/Utility'
const initialState = {
     ingredients: null,
     customars: null,
     price: 0,
     error: false
}

const checkOutReducer = (state = initialState,action) => {
     /* eslint-disable default-case */
     switch (action.type) {
          case actionType.BURGER_CHECKOUT_SUCCESS : 
               return updateObj(state,{
                    price: action.price,
                    ingredients: action.ingredients,
                    customars: action.customars,
                    error: false
               })
          case actionType.BURGER_CHECKOUT_FIELD : 
               return updateObj(state,{error: true})
          default : return state
     }
}
export default checkOutReducer;