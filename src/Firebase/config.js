import firebase from "firebase";
import 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4SE5PTT1RiLHNcppl39pYAzZWdQvQB1g",
    authDomain: "netfli-21339.firebaseapp.com",
    projectId: "netfli-21339",
    storageBucket: "netfli-21339.appspot.com",
    messagingSenderId: "211536730694",
    appId: "1:211536730694:web:4675c0cb0ca487259e8847",
    measurementId: "G-W7J8JBY93Y"
  };
  export default firebase.initializeApp(firebaseConfig)