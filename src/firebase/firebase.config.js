// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADyMjXeprGj0fv_LV8ai0KQwKrbf5iKr8",
  authDomain: "organization-manager-bd.firebaseapp.com",
  projectId: "organization-manager-bd",
  storageBucket: "organization-manager-bd.appspot.com",
  messagingSenderId: "1066894808202",
  appId: "1:1066894808202:web:c4f44352e2c6bd764dc973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
