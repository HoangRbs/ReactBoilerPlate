import {Route,Switch,Router} from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import { LoginPage } from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import {createBrowserHistory} from 'history';
import PrivateRoute from './PrivateRoute';

export const customHistory = createBrowserHistory();

const BrowserRoutes =() => {
  return (
    <Router history = {customHistory}>
      <div>  {/* inside BrowserRouter there's only one element --> or else ReactRouter will break */}
        <Switch>
          <Route exact path = "/" component = {LoginPage}></Route>
          <PrivateRoute path = "/Dashboard" component = {Dashboard}/>
          <Route><NotFoundPage /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default BrowserRoutes;