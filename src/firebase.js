import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBmJuPAGb2qUtavEmmd10L3lozqHYSVuAY",
    authDomain: "slack-clone-tut.firebaseapp.com",
    projectId: "slack-clone-tut",
    storageBucket: "slack-clone-tut.appspot.com",
    messagingSenderId: "858032781559",
    appId: "1:858032781559:web:631008e6ae10b514057bf2",
    measurementId: "G-GM5M4CH1WX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export{auth, provider, db};