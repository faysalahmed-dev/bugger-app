import * as actionType from '../../Action/ActionType';
import updateObj from '../Utility/Utility'
import { burgerCheckOutSuccess} from './CheckOutHelper'
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
               return burgerCheckOutSuccess(state,action)
          case actionType.BURGER_CHECKOUT_FAILD : 
               return updateObj(state,{error: true})
          default : return state
     }
}
export default checkOutReducer;