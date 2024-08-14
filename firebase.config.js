
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7Hcu9iLVxvhpDnXDFT7eTeK62I9O6Ls",
  authDomain: "job-task-2-175ee.firebaseapp.com",
  projectId: "job-task-2-175ee",
  storageBucket: "job-task-2-175ee.appspot.com",
  messagingSenderId: "1026331385018",
  appId: "1:1026331385018:web:c1ee88463d7a466065b683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth
