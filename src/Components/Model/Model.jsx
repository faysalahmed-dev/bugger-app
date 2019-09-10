import React from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'
import './Model.scss'
const Model = ({ children, purchasableMode, canclePurchase}) => {
     return (
          <React.Fragment>
               <BackDrop show={purchasableMode} canclePurchase={canclePurchase}/>
               <div className="model" style={{
                    transform: `translate(-50%,${purchasableMode ? '-50%': '-150vh'})`,
                    opacity: purchasableMode ? '1' : '0',
               }}>
                    {children}
               </div>
          </React.Fragment>
     )
}

export default Model
