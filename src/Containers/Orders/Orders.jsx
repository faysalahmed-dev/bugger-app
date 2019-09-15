import React from 'react'
import Order from '../../Components/Order/Order/Order'
import axios from '../../axios/http'
class Orders extends React.Component {
     state = {
          orders: [],
          isLoading : false
     }
     componentDidMount () {
          axios.get("/orders.json")
               .then(({data}) => {
                    const orders = []
                    for(let key in data){
                         orders.push({
                            ...data[key],
                            id: key
                         })
                    }
                    this.setState({orders})
               })
               .catch(() => this.setState({isLoading: false}))
               //okhdklfjfdsk: {}
     }
     render () {
          return (
               <div>
                    {this.state.orders.map(({ id, ingredients,price}) => <Order key={id} ingredients={ingredients} price={price} />)}
               </div>
          )
     }
}
export default Orders;