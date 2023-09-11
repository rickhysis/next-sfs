import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAWxHQ4Wfc7z_5H8OLrl9mJuGv4dIb88wE",
	authDomain: "sfs-db-e2130.firebaseapp.com",
	projectId: "sfs-db-e2130",
	storageBucket: "sfs-db-e2130.appspot.com",
	messagingSenderId: "609222608047",
	appId: "1:609222608047:web:0293d99168dd1622c1c05a",
	measurementId: "G-8V857YV961"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }
