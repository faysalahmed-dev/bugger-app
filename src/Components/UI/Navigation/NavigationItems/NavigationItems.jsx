import React from 'react'
import {Link} from 'react-router-dom'
import './NavigationItems.scss'

const NavigationItems = (props) => (
     <li className="navigation-item">
          <Link href={props.link} 
               className={props.className} to="/orders">{props.children}
          </Link>
     </li>
)

export default NavigationItems
