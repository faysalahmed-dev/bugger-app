import React from 'react'
import './ToolBar.scss'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
const ToolBar = () => {
     return (
          <header className="toolbar">
               <input type="checkbox" name="" id="humbar" className="checkbox"/>
               <label htmlFor="humbar" className="humbar">
                    <div></div>
               </label>
               <Logo />
               <nav>
                   <Navigation />
               </nav>
          </header>
     )
}

export default ToolBar
