import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDHz0AgUHaNkxIZQuQy7IU2J4teB2VTBJs",
	authDomain: "zainal-blogs.firebaseapp.com",
	projectId: "zainal-blogs",
	storageBucket: "zainal-blogs.appspot.com",
	messagingSenderId: "542175146008",
	appId: "1:542175146008:web:dc5953d633cb8dace0136d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
