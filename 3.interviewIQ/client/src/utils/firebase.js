
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-7700d.firebaseapp.com",
  projectId: "interviewagent-7700d",
  storageBucket: "interviewagent-7700d.firebasestorage.app",
  messagingSenderId: "313177068033",
  appId: "1:313177068033:web:e57c4a0d1e7fc57a4e2600"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}