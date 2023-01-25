// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpEK2-FZOelAsfsGvG8-CZy6TLy_TufuM",
  authDomain: "financialmanagementsyste-93499.firebaseapp.com",
  projectId: "financialmanagementsyste-93499",
  storageBucket: "financialmanagementsyste-93499.appspot.com",
  messagingSenderId: "60954509046",
  appId: "1:60954509046:web:f888c3608baff92001b6d7",
  measurementId: "G-HCK86YNCYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }
export {analytics}