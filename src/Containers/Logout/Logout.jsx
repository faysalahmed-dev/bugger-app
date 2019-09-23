import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../Store/Action/ActionCreator/index'
class Logout extends Component {
     componentDidMount () {
          this.props.OnLogout()
     }
     render () {
          return <Redirect to="/" />
     }
}
const mapDispatchToProps = dispatch => ({
     OnLogout() { dispatch(logout()) }
});
export default connect(null,mapDispatchToProps)(Logout);