import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems'
import './Navigation.scss'

const Navigation = () => {
     return (
          <ul className="navigation">
               <NavigationItems link='/' className="active">Burger Builder</NavigationItems>
               <NavigationItems link='/'>Check Out</NavigationItems>
          </ul>
     )
}

export default Navigation
