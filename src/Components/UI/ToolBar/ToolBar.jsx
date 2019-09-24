import React from 'react'
import './ToolBar.scss'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
const ToolBar = () => {
     return (
          <header className="toolbar">
               <Logo />
               <nav>
                   <Navigation />
               </nav>
          </header>
     )
}

export default ToolBar
