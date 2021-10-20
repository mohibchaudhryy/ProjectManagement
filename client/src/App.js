import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Login from './components/User/Login';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route path="/" exact component={ ()=> <Redirect to='/user/signin' /> } />
        <Route path="/dashboard" exact component={ Dashboard } />
        <Route path="/user/signin" exact component={ Login } />


        
      </Switch>

    </BrowserRouter>
  );
}

export default App;
