import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BuggerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import Orders from './Containers/Orders/Orders';
import Authentication from './Containers/Authentication/Authentication';
import  Logout from "./Containers/Logout/Logout";
import './App.scss';

//import SusHoc from './Hoc/AsyncComponent/AsyncComponent'
// const CheckOutAsync = lazy(() => import('./Containers/CheckOut/CheckOut'))
// const AuthAsync = lazy(() => import('./Containers/Authentication/Authentication'))
// const OrdersAsync = lazy(() => import('./Containers/Orders/Orders'))


function App(props) {
	let routes;
	routes = (
		< Fragment >
			< Route path="/authentication" exact component={Authentication}/>
			<Route path="/" exact component={BurgerBuilder} />
			<Redirect to="/" />
		</ Fragment>
	)
	if(props.auth) {
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
					{routes}
					<Route
						render={() => (
							<div
								style={{
									width: '100%',
									height: '100vh',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<h1>some thing wrong</h1>
							</div>
						)}
					/>
				</Switch>
			</Layout>
		</div>
	);
}
const mapStateToProps = (state) => ({
	auth: state.auth.token != null
});

export default connect(mapStateToProps)(App);
