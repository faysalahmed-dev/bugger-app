import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BuggerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import Orders from './Containers/Orders/Orders';
import Authentication from './Containers/Authentication/Authentication';
import  Logout from "./Containers/Logout/Logout";
import Page404 from './Components/UI/404Page/Page404'

import './App.scss';

function App({auth}) {
	let routes;
	routes = (
		< Fragment >
			< Route path="/authentication" exact component={Authentication}/>
			<Route path="/" exact component={BurgerBuilder} />
			<Redirect to="/" />
		</ Fragment>
	)
	if(auth) {
		routes = (
			< Fragment >
				<Route path="/checkout" component={CheckOut}/>
				<Route path="/orders" exact component={Orders}/>
				< Route path="/authentication" exact component={Authentication} />
				<Route path="/logout" exact component={Logout} />
				<Route path="/" exact component={BurgerBuilder} />
			</ Fragment>
		)
	}
	return (
		<div className="App">
			<Layout>
				<Switch>
					{/* <Route path="/orders" exact component={Orders} /> */}
					{routes}
					<Route component={Page404} />
				</Switch>
			</Layout>
		</div>
	);
}
const mapStateToProps = (state) => ({
	auth: state.auth.token != null
});

export default connect(mapStateToProps)(App);
