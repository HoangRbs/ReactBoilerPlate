import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import { authReducer } from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({
    authState: authReducer
  }),
  composeEnhancers(applyMiddleware(reduxThunk))
);

// store.subscribe(() => {
//   console.log(store.getState().authState);
// });