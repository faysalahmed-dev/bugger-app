import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from "redux"
import {Provider} from 'react-redux'
import Reducer from './Store/Reducer/Reducer'
import App from './App';

import './index.scss';

const store = createStore(Reducer)

const app = (
     <Provider store={store}>
          <Router>
               <App />
          </Router>
     </Provider>
)

ReactDOM.render(app ,document.getElementById('root'));

