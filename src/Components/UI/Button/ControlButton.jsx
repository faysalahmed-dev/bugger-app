import React from 'react';
import './ControlButton.scss';

const ControlButton = ({ clsName, handleClick,...otherProps}) => {
     return (
          <button {...otherProps} className="button_control" onClick={handleClick}>
               <div className={clsName}></div>
          </button>
     )
}

export default ControlButton