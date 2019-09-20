import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import BuggerBuilderReducer from './Store/Reducer/BuggerBuilder'
import CheckoutReducer from './Store/Reducer/Checkout'
import OrderReducer from './Store/Reducer/Order'
import App from './App';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
     burgerBuilder: BuggerBuilderReducer,
     checkout: CheckoutReducer,
     orders: OrderReducer
})

const store = createStore(
     reducers , 
     composeEnhancers(
          applyMiddleware(thunk)
     )
)

const app = (
     <Provider store={store}>
          <Router>
               <App />
          </Router>
     </Provider>
)

ReactDOM.render(app ,document.getElementById('root'));

