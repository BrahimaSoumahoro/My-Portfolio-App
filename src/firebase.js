
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4fvZjBZClzPDZaJ6J0uMz0ci-3TxmdII",
  authDomain: "brahimaportfolioapp.firebaseapp.com",
  databaseURL: "https://brahimaportfolioapp-default-rtdb.firebaseio.com",
  projectId: "brahimaportfolioapp",
  storageBucket: "brahimaportfolioapp.appspot.com",
  messagingSenderId: "118749077977",
  appId: "1:118749077977:web:17e7effd2712705d1c79c8",
  measurementId: "G-J4BVG4ZXQR",
  persistence: true,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);



export const signInWithGoogle = () => signInWithPopup(auth, provider);






// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, user => {
//   // Check for user status
// });
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//   apiKey: "",
//   authDomain: "",
//   projectId: "brahimaportfolioapp",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

// const App = firebase.initializeApp(
//   // use platform specific firebase config
//   Platform.OS === 'ios' ? iosConfig : androidConfig,
//   // name of this app
//   'App',
// );
