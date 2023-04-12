// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9f3gX89D1D61-ioI1KyMHnz4PH4AImqc",
  authDomain: "organization-manager-app.firebaseapp.com",
  projectId: "organization-manager-app",
  storageBucket: "organization-manager-app.appspot.com",
  messagingSenderId: "949005006447",
  appId: "1:949005006447:web:bb1a10c07fa85a88e87f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
