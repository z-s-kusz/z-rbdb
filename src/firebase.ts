import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // it's ok to have these keys public https://firebase.google.com/docs/projects/api-keys
    apiKey: "AIzaSyBeY5-OKSUbeCYXfaJkvbY-M707qP2LAAU",
    authDomain: "zrbdb-9001f.firebaseapp.com",
    projectId: "zrbdb-9001f",
    storageBucket: "zrbdb-9001f.appspot.com",
    messagingSenderId: "1020046397159",
    appId: "1:1020046397159:web:977c370fb3593a2cb5dc42",
    measurementId: "G-G3Y55GDPMG"
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const analytics = getAnalytics(firebaseApp); // TODO use analytics
  const auth = getAuth(firebaseApp);

  // auth
  const globalUserRef = ref<User | null>(null);
  if (auth.currentUser) globalUserRef.value = auth.currentUser; // set globalUserRef at start if user still valid

  onAuthStateChanged(auth, (user) => {
    if (user) {
      globalUserRef.value = user;
    } else {
        // User is signed out
        globalUserRef.value = null;
    }
  });

  export {
    firebaseApp,
    db,
    analytics,
    auth,
    globalUserRef,
  };
