import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//all reducers
import BuggerBuilderReducer from './Store/Reducer/BurgerBuilderReducer/BuggerBuilderReducer';
import CheckoutReducer from './Store/Reducer/CheckOutReducer/CheckoutReducer';
import OrderReducer from './Store/Reducer/OrderReducer/OrderReducer';
import authenticationReudcer from './Store/Reducer/AuthenticationReducer/Authentication';

import App from './App';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	burgerBuilder: BuggerBuilderReducer,
	checkout: CheckoutReducer,
	orders: OrderReducer,
	auth: authenticationReudcer
});
// creact store
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
