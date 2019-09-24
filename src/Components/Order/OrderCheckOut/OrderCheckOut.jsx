import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';
import './OrderCheckout.scss'
function orderCheckOut({ ingredients, handleCancle, handleContinue,showButton }) {
     return (
          <div className="order-checkout__container">
               <Burger ingredients={ingredients} />
               {showButton  && (<div className="order-checkout__button-group">
                    <Button handleClick={handleCancle} button="primary-outline button-sm" >Cancle</Button>
                    <Button handleClick={handleContinue} button="primary-outline button-sm" >Continue</Button>
               </div>)}
          </div>
     )
}
export default orderCheckOut;