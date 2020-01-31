import React from 'react';
import { Link } from 'react-router-dom';
import { startSignOut } from '../auth/auth';

const Header =() => {
  return (
    <div className = 'header'>
      <div className = 'content-container'>
        <div className = 'header-contents'>
          <Link to = "/Dashboard">react boiler plate</Link>
          
          {/* <Link to = "/none_exist">noneExist</Link> */}
          <button onClick = {startSignOut} >Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default Header;