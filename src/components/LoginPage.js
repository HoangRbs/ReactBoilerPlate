import React from 'react';
import {startLogin} from '../auth/auth';

export const LoginPage =() => {
  return (
    <div className = 'box-layout'>
      <div className = 'box-layout__box'>
        
          <h2 className = 'box-layout__title'>Expensify</h2>
          <p>keep track of your expenses</p>
        
        <button className='button' onClick = {startLogin}>Login</button>
      </div>
    </div>
  )
}

