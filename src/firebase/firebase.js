import * as firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.API_KEY,  //replace these CONSTANTS in bundle.js with webpack DefinePlugin
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase }
export default database;


// firebase.database().ref().set({
//   name: 'hoang pro',
//   single: true,
//   location: {
//     city: 'Hanoi',
//     country: 'Nghe An'
//   },
//   age: 16
// })
// .then(() => {
//   console.log("edit database successfully");
// })
// .catch((e) => {
//   console.log("error!! : ",e);
// })

// database.ref('expenses').push({
//   description: 'dildo',
//   amount: 500,
//   createdAt: 1000,
//   note: ''
// });

// database.ref('expenses').push({
//   description: 'vagina',
//   amount: 1000000,
//   createdAt: 2000,
//   note: ''
// });

// database.ref('expenses').push({
//   description: 'advanced dildo',
//   amount: 700,
//   createdAt: 3000,
//   note: ''
// });

// firebase.database().ref('name').set('hoang super pro');
// firebase.database().ref('location/city').set('VietNam city');
// firebase.database().ref('attribute').set({
//   width: 100,
//   height: 300
// })
// .then(() => {
//   console.log("edit database successfully");
// })
// .catch((e) => {
//   console.log("error!! : ",e);
// });

// database.ref().on("value",(snapShot) => {  //turn on VALUE EVENT 
//   console.log(snapShot.val());
// });

// setTimeout(()=> {  
//   database.ref('age').set(30);  //trigger VALUE EVENT
// },1000);

// setTimeout(()=> {
//   database.ref('age').set(31);
// },2000);

// setTimeout(()=> {
//   database.ref('age').set(32);
// },3000);




// setTimeout(()=> {
//   database.ref('age').set(33);  
// },4000);

// database.ref('expenses').on('value',(snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });
