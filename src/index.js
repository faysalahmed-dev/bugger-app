import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import creactSagaMiddleWere from 'redux-saga'

//all reducers
import BuggerBuilderReducer from './Store/Reducer/BurgerBuilderReducer/BuggerBuilderReducer';
import CheckoutReducer from './Store/Reducer/CheckOutReducer/CheckoutReducer';
import OrderReducer from './Store/Reducer/OrderReducer/OrderReducer';
import authenticationReudcer from './Store/Reducer/AuthenticationReducer/Authentication';


import App from './App';

import './index.scss';

const composeEnhancers = process.env.NODE_ENV === 'development' ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const reducers = combineReducers({
	burgerBuilder: BuggerBuilderReducer,
	checkout: CheckoutReducer,
	orders: OrderReducer,
	auth: authenticationReudcer
});

const sagaMiddleWere = creactSagaMiddleWere()
// creact store
const store = createStore(reducers, 
	composeEnhancers(applyMiddleware(thunk, sagaMiddleWere)));

const app = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
