// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2BXZlqH_aqGYh6mZl6aW-5dXt9J1zo8",
  authDomain: "hdps-auth.firebaseapp.com",
  projectId: "hdps-auth",
  storageBucket: "hdps-auth.appspot.com",
  messagingSenderId: "521602374320",
  appId: "1:521602374320:web:ea06d6b3ba296457407975"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };