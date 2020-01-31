import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './firebase/firebase';
import * as firebase from "firebase/app";
import 'firebase/auth';
import { customHistory } from './Routes/BrowserRoutes';
import { login,logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

//inject component into html DOM using React Dom 
ReactDOM.render(<LoadingPage/>,document.getElementById('app'));

const renderApp =() => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
  ,document.getElementById('app'));
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(login(user));
    renderApp();
    if(customHistory.location.pathname === "/")
      customHistory.push("/Dashboard");
  }
  else {
    store.dispatch(logout());
    renderApp();
    customHistory.push("/");
  }
});