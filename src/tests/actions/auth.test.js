import { login,logout } from '../../actions/auth';

test(" login action should return expected object ",() => {
  const user = {
    uid: 'rgwrgr'
  }

  const action = login(user);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: user.uid
  });
});
