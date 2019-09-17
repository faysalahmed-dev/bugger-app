import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

function orderCheckOut({ ingredients, handleCancle, handleContinue }) {
     return (
          <div>
               <Burger ingredients={ingredients} />
               <Button handleClick={handleCancle} type="primary">Cancle</Button>
               <Button handleClick={handleContinue} type="secondary">Continue</Button>
          </div>
     )
}
export default orderCheckOut;