import React from 'react'
import './BackDrop.scss'

const BackDrop = ({ show, handleClick }) => show ? 
               (<div className="back-drop" onClick={handleClick}></div>) 
               : null

export default React.memo(BackDrop);
