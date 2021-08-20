import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNJB7SB94DrcXVbDlJwRjZiDC3JqAHnuY",
  authDomain: "sign-f5dfe.firebaseapp.com",
  projectId: "sign-f5dfe",
  storageBucket: "sign-f5dfe.appspot.com",
  messagingSenderId: "278795860369",
  appId: "1:278795860369:web:7df6ec6ce94896e0100230",
  measurementId: "G-EHB8F58M84",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
