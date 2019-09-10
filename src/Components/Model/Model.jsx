import React from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'
import './Model.scss'
class Model extends React.Component {
     shouldComponentUpdate (nextProps) {
          return nextProps.purchasableMode !== this.props.purchasableMode;
     }
     render() {
          const { children, purchasableMode, canclePurchase } = this.props;
          return(
               <React.Fragment>
                    <BackDrop show={purchasableMode} canclePurchase={canclePurchase} />
                    <div className="model" style={{
                         transform: `translate(-50%,${purchasableMode ? '-50%' : '-150vh'})`,
                         opacity: purchasableMode ? '1' : '0',
                    }}>
                         {children}
                    </div>
               </React.Fragment >
          )
     }
}    
export default Model;
