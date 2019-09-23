/* eslint-disable no-fallthrough */
import * as actionType from '../../Action/ActionType'
import updataObject from "../Utility/Utility";

const initialState = {
     orders: [],
     error: false
}
const orderReducer = (state = initialState,action) => {
     switch (action.type) {
          case actionType.FATCH_ORDER_SUCCESS : 
               return updataObject(state, {orders: action.orders,error: false })
          case actionType.FATCH_ORDER_FAILD : 
               return updataObject(state, { error: true})
          default : return state
     }
}

export default orderReducer;