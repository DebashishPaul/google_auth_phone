import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBM8e2D7oSosVMJNgcxhhWNXt8Bd1SjljE",
    authDomain: "carebox-phone-auth.firebaseapp.com",
    projectId: "carebox-phone-auth",
    storageBucket: "carebox-phone-auth.appspot.com",
    messagingSenderId: "620227551348",
    appId: "1:620227551348:web:da6832faed088ded343121"
}

firebase.initializeApp(config);

export default firebase