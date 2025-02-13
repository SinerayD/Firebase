import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJLfy0hPOjyLWzXDnDKZ_poAlhX5Rbji4",
    authDomain: "fir-edu-328b3.firebaseapp.com",
    projectId: "fir-edu-328b3",
    storageBucket: "fir-edu-328b3.firebasestorage.app",
    messagingSenderId: "371211682171",
    appId: "1:371211682171:web:892ade970d56e014f2fdde"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);