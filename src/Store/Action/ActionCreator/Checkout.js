import * as actionType from '../ActionType'
import axios from '../../../axios/http'

const checkoutSuccess = (order) => {
     return {
          type: actionType.BURGER_CHECKOUT_SUCCESS,
          order
     }
}
const checkoutField = () => {
     return {
          type : actionType.BURGER_CHECKOUT_FIELD,
          error : true
     }
}

export const checkoutBurger = (order,callBack) => {
     return dispatch => {
          axios
               .post('/orders.json', order)
               .then(() => {
                    dispatch(checkoutSuccess(order))
                    callBack()
               })
               .catch(() => {
                    dispatch(checkoutField())
               });
     }
}