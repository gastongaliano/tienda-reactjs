import  firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMZJyGpWATZVorNmg5FK0V2V68iwwlnUw",
  authDomain: "tienda-gastong.firebaseapp.com",
  projectId: "tienda-gastong",
  storageBucket: "tienda-gastong.appspot.com",
  messagingSenderId: "344072486470",
  appId: "1:344072486470:web:ae458a0b22c009f2c35447"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app;
};

export function getFirestore(){
  return firebase.firestore(app);
}

