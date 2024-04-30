// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg6L0RIHcEcu9CCtwsxTaDx3nfn8nIYR0",
  authDomain: "devengage-ffd75.firebaseapp.com",
  databaseURL: "https://devengage-ffd75-default-rtdb.firebaseio.com",
  projectId: "devengage-ffd75",
  storageBucket: "devengage-ffd75.appspot.com",
  messagingSenderId: "292550239608",
  appId: "1:292550239608:web:ea6b82e8212457fd7d548d",
  measurementId: "G-LLD3HWHKGV"
  // apiKey: "AIzaSyCr5mMVt0K_bvAny0Kec4AeiQeDvHGqPCM",
  // authDomain: "devengage-652f1.firebaseapp.com",
  // projectId: "devengage-652f1",
  // storageBucket: "devengage-652f1.appspot.com",
  // messagingSenderId: "97033813357",
  // appId: "1:97033813357:web:a01843132a083db41cae64",
  // measurementId: "G-DMN5YGD1FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
