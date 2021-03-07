//Part 1
import firebase from "firebase";
require("dotenv").config();
//Part 2

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "slack-clone-challenge-data",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKETS,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

//part 3
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;