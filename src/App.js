import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BuggerBuilder'
import './App.scss';
import CheckOut from './Containers/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact render={(options) => <BurgerBuilder {...options} />}/>
          <Route path="/checkout" exact render={(options) => <CheckOut {...options}/>}/>
          <Route path="/checkout/checkout-form" exact render={(options) => <h1>checkout form</h1>} />
          <Route render={() => (
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>some thing wrong</h1>
            </div>
          )} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
