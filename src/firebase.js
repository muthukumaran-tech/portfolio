// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_hesa_svPU66mfs4B_TQ13W4GaiIWJmU",
  authDomain: "mk17phoenix.firebaseapp.com",
  databaseURL: "https://mk-portfolio-f7ed2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mk-portfolio-f7ed2",
  storageBucket: "mk-portfolio-f7ed2.appspot.com",
  messagingSenderId: "165224919305",
  appId: "1:165224919305:web:5665b3468bacdf848563d8",
  measurementId: "G-9R668L9R8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);