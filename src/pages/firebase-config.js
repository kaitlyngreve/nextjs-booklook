
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAquRYoVlcnQEaHrpTrUXcvx3Lhn8OID9Q",
    authDomain: "book-look-4abfd.firebaseapp.com",
    projectId: "book-look-4abfd",
    storageBucket: "book-look-4abfd.appspot.com",
    messagingSenderId: "174402320469",
    appId: "1:174402320469:web:1d3148edaf5957fd04bcdc",
    measurementId: "G-D5HH78C3B8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
