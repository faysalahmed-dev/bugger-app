import React from 'react'
import './BackDrop.scss'

const BackDrop = ({ show, canclePurchase }) => show ? 
               (<div className="back-drop" onClick={canclePurchase}></div>) 
               : null

export default BackDrop
