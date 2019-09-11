import React from 'react'
import './Loader.css'
const loader = () => {
     return(
          <div className="loader-container">
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
               <p className="loader-text">Please Wait ...</p>
          </div>
     )
}
export default loader;