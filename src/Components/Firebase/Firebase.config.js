// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {



    apiKey: "AIzaSyB4kzhWi5p6QlEYj-Cu3ogrYtAfihWnVdo",
  authDomain: "chef-recipe-hunter-5a67e.firebaseapp.com",
  projectId: "chef-recipe-hunter-5a67e",
  storageBucket: "chef-recipe-hunter-5a67e.appspot.com",
  messagingSenderId: "890608467950",
  appId: "1:890608467950:web:0d918003ab1809ee35d8ff"
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;