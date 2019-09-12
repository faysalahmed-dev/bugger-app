import React, { Component } from 'react'
import OrderCheckOut from '../../Components/Order/OrderCheckOut/OrderCheckOut'
class CheckOut extends Component {
     state = {
          ingredients : {
               salad: 1,
               meat: 1,
               cheese:1,
               bacon: 1
          }
     }
     handleClick  = () => {

     }
     render () {
          return (
               <div>
                    <OrderCheckOut ingredients={this.state.ingredients} handleClick={this.handleClick}/>
               </div>
          )
     }
}
export default CheckOut;