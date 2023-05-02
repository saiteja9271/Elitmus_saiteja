import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCgOyrt8FF0vv1FT-jAkTtiYO2o85vANiY",
  authDomain: "webauth-29603.firebaseapp.com",
  projectId: "webauth-29603",
  storageBucket: "webauth-29603.appspot.com",
  messagingSenderId: "648382312143",
  appId: "1:648382312143:web:53d4fe8682b4f6d17191ba"

};
initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const twitter = new TwitterAuthProvider()