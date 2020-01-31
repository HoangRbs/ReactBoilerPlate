import { firebase ,googleAuthProvider} from '../firebase/firebase';

export const startLogin =() => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
}

export const startSignOut =() => {
  return firebase.auth().signOut();
}