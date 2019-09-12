import React from 'react'
import './Loader.css'
const loader = ({ setHeight, children}) => {
     return(
          <div className="loader-container" style={setHeight}>
               <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
               <p className="loader-text">{children || 'Please Wait ...'}</p>
          </div>
     )
}
export default loader;