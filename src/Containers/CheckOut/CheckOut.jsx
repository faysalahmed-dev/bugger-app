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
     componentDidMount() { 
          // "?bacon=1&cheese=1&meat=1&salad=2"
          const url = this.props.location.search
               .substring(1) //'bacon=1&cheese=1&meat=1&salad=2'
               .split('&') // ['bacon=1','cheese=1','meat=1','salad=2']
               .map(link => link.split('=')) // [['bacon','1'],['cheese','1'],['meat','1'],['salad','2']]
          const ingredients = {} // empty obj
          for (let i = 0; i < url.length; i++) {
               ingredients[url[i][0]] = +url[i][1] // {bacon: 1}
          }
          this.setState({ingredients})
     }
     handleCancle  = () => {
          this.props.history.goBack()
     }
     handleContinue  = () => {
          this.props.history.push(`${this.props.match.path}/checkout-form`)
     }
     render () {
          return (
               <div>
                    <OrderCheckOut ingredients={this.state.ingredients} 
                         handleClick={this.handleClick}
                         handleCancle={this.handleCancle}
                         handleContinue={this.handleContinue} />
               </div>
          )
     }
}
export default CheckOut;