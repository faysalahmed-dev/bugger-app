import React from 'react'
import PropType from 'prop-type'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

const orderCheckOut = (props) => {
     return (
          <div>
               <Burger ingredients={props.ingredients}/>
               <Button onClick={props.handleClick} type="primary">Cancle</Button>
               <Button onClick={props.handleClick} type="secondary">Continue</Button>
          </div>
     )
}
orderCheckOut.prototype = {
     ingredients : PropType.object,
     handleClick: PropType.function
}
export default orderCheckOut;