import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../Store/Action/ActionCreator/index';

const Logout = (props) => {
     useEffect(() => {
         props.OnLogout()
     }, []);
     return <Redirect to="/" />
}

const mapDispatchToProps = dispatch => ({
     OnLogout() { dispatch(logout()) }
});
export default connect(null,mapDispatchToProps)(Logout);