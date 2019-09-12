import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

class OrderCheckOut extends React.Component {
     render () {
          const { ingredients, handleCancle, handleContinue} = this.props;
          return (
               <div>
                    <Burger ingredients={ingredients} />
                    <Button handleClick={handleCancle} type="primary">Cancle</Button>
                    <Button handleClick={handleContinue} type="secondary">Continue</Button>
               </div>
          )
     }
}

export default OrderCheckOut;