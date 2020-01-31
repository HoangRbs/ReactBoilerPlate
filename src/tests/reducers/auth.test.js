import { authReducer } from '../../reducers/auth';

test(" authReducer should return LOGIN state ",() => {
  const action = {
    type: 'LOGIN',
    uid: 'seferf'
  } 
  const authState = authReducer({},action);
  expect(authState).toEqual({
    uid: action.uid
  });
});