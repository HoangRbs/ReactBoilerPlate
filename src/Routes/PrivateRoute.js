import React from 'react';
import {connect} from 'react-redux';
import { Route ,Redirect} from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute =(props) => {
  const {
    isAuthenticated,
    component:Component,
    ...rest
  } = props;

  return <Route {...rest} component = {(routeProps) => {
    return isAuthenticated? (
      <div>
        <Header/>
        <Component {...routeProps}/>
      </div>
    ) : (
      <Redirect to="/"/>
    )
  }}/>
}

const mapStateToProps =(state) =>{
  return{
    isAuthenticated: state.authState.uid
  }
}

export default connect(mapStateToProps,undefined)(PrivateRoute);