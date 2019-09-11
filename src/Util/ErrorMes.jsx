import React from 'react'
import './ErrorMes.scss'


const ErrorMes = (props) => {
     return (
          <div className="error-meg__container" style={props.height}>
               <h2 className="error-meg__text">Some thing went wrong please check your network. try Again!</h2>
          </div>
     )
}

export default ErrorMes
