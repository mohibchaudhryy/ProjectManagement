import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Login from './components/User/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CreateUser from './components/Dashboard/User/CreateUser';
import AllRUsers from './components/Dashboard/User/AllRUsers';
import AllProjects from './components/Dashboard/Projects/AllProjects';
import CreateProject from './components/Dashboard/Projects/CreateProjects';

import MyProjects from './components/Dashboard/Projects/MyProjects';

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route path="/" exact component={ ()=> <Redirect to='/user/signin' /> } />
        <Route path="/dashboard" exact component={ Dashboard } />
        <Route path="/user/signin" exact component={ Login } />
        <Route path="/user/createuser" exact component={ CreateUser } />
        <Route path="/user/allusers" exact component={ AllRUsers } />
        <Route path="/admin/projects/createproject" exact component={ CreateProject } />
        <Route path="/admin/projects/allprojects" exact component={ AllProjects } />
        <Route path="/ruser/projects" exact component={ MyProjects } />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
