import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPudvlsEp6hgRom-8WS7CIw47Xr17RTik",
    authDomain: "chat-app-ae25d.firebaseapp.com",
    projectId: "chat-app-ae25d",
    storageBucket: "chat-app-ae25d.appspot.com",
    messagingSenderId: "22660001615",
    appId: "1:22660001615:web:623c75b5dc8db144b4df3a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
