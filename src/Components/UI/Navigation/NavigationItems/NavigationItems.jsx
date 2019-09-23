import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavigationItems.scss'

const NavigationItems = (props) => (
     <li className="navigation-item">
          <NavLink exact className={props.className} to={props.link} >
               {props.children}
          </NavLink>
     </li>
)

export default NavigationItems
