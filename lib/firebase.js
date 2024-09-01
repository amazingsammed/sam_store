
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV2frW6svnTZwb05AxlDROD-yMsqDL-8w",
    authDomain: "accountingdevapp.firebaseapp.com",
    databaseURL: "https://accountingdevapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "accountingdevapp",
    storageBucket: "accountingdevapp.appspot.com",
    messagingSenderId: "623162670259",
    appId: "1:623162670259:web:dc47e051034fe4719504c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);