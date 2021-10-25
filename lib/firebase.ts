import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC2V2KmjWy3lOHaF6w3Mx8aardqrcxOe_A",
  authDomain: "next-auth-a34a3.firebaseapp.com",
  projectId: "next-auth-a34a3",
  storageBucket: "next-auth-a34a3.appspot.com",
  messagingSenderId: "296678112392",
  appId: "1:296678112392:web:d2b7df01de666d391ff33d"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
