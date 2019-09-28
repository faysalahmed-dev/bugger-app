import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BuggerBuilder';
import  Logout from "./Containers/Logout/Logout";
import Auth from './Containers/Authentication/Authentication'
import CheckOut from './Containers/CheckOut/CheckOut'
import Orders from './Containers/Orders/Orders';
import Page404 from './Components/UI/404Page/Page404'

import './App.scss';


function App({auth}) {
	let routes;
	routes = (
		<Switch>
			< Route path="/authentication" exact component={Auth}/>
			<Route path="/" exact component={BurgerBuilder} />
			<Route component={Page404} />
		</Switch>
	)
	if(auth) {
		routes = (
			<Switch>
				<Route path="/checkout" component={CheckOut}/>
				<Route path="/orders" exact component={Orders}/>
				< Route path="/authentication" exact component={Auth} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/" exact component={BurgerBuilder} />
				<Route component={Page404} />
			</Switch>
		)
	}
	return (
		<div className="App">
			<Layout>
				{routes}
			</Layout>
		</div>
	);
}
const mapStateToProps = (state) => ({
	auth: state.auth.token != null
});

export default connect(mapStateToProps)(App);
