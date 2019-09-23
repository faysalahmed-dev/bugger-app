import React from 'react';
import { connect } from 'react-redux'
import NavigationItems from './NavigationItems/NavigationItems'
import './Navigation.scss'

const Navigation = ({ auth}) => {
     return (
          <ul className="navigation">
               <NavigationItems link='/'>Home</NavigationItems>
               {
                    auth && (<NavigationItems link='/orders'>Check Out</NavigationItems>)
               }
               {
                    !auth ? (<NavigationItems link='/authentication'>SingUp/Login</NavigationItems>) : (<NavigationItems link='/logout' >Log Out</NavigationItems>  )
               }
          </ul>
     )
}

const mapStateToProps = state =>( {auth: state.auth.token});

export default connect(mapStateToProps)(Navigation);
