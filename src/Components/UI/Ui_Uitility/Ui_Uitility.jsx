import React from 'react';
import './Ui_Uitility.scss'

export const FormToggleButton = (props) => {
     return (
          <button className="form_toggle-btn" onClick={props.handleClick}>{props.children}</button>
     )
}

