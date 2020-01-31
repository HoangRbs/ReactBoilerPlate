const authInitState = {
  
}

export const authReducer =(state = authInitState,action) => {
  switch(action.type){
    case 'LOGIN': 
      return {
        uid: action.uid
      }; 
    case 'LOGOUT':
      return {
        
      };
    default: 
      return state;
  }
}