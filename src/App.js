import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BuggerBuilder';
import CheckOut from './Containers/CheckOut/CheckOut';
import Orders from './Containers/Orders/Orders';

import './App.scss';
function App() {
	return (
		<div className="App">
			 <Layout>
				<Switch>
					<Route path="/checkout" render={(options) => <CheckOut {...options} />} />
					<Route path="/orders"  exact render={(options) => <Orders {...options} />} />
					<Route path="/"  exact render={(options) => <BurgerBuilder       {...options} />} />
					
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

export default App;
