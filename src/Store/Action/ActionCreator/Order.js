import * as actionType from '../ActionType'
import axios from '../../../axios/http'

const  fatchOrderSuccess = (orders) => {
     return {
          type : actionType.FATCH_ORDER_SUCCESS,
          orders
     }
}
const fatchOrderFaild = () => {
     return {
          type: actionType.FATCH_ORDER_FAILD,
     }
}
export const fatchOrderFormDataBase = () => {
     return dispatch => {
          axios.get("/orders.json")
               .then(({ data }) => {
                   const orders = []
                    for (let key in data) {
                         orders.push({
                              ...data[key],
                              id: key
                         })}
                    dispatch(fatchOrderSuccess(orders))
               })
               .catch(() => dispatch(fatchOrderFaild()))
     }
}
