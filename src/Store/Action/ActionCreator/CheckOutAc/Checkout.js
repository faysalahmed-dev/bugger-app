import * as actionType from '../../ActionType'
import axios from '../../../../axios/http'

const checkoutSuccess = (order) => {
     return {
          type: actionType.BURGER_CHECKOUT_SUCCESS,
          order
     }
}
const checkoutField = () => {
     return {
          type : actionType.BURGER_CHECKOUT_FAILD,
          error : true
     }
}

export const checkoutBurger = (order, token,callBack) => {
     return dispatch => {
          axios
               .post('/orders.json?auth='+token, order)
               .then(() => {
                    dispatch(checkoutSuccess(order))
                    callBack()
               })
               .catch(() => {
                    dispatch(checkoutField())
               });
     }
}