import React from 'react'
import './NavigationItems.scss'

const NavigationItems = (props) => (
     <li className="navigation-item">
          <a href={props.link} className={props.className}>      {props.children}
          </a>
     </li>
)

export default NavigationItems
