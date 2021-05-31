import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAkXEGGYaLjFOiLY9iJehGjV6CXRI13L18",
    authDomain: "gb-lesson8-hw.firebaseapp.com",
    databaseURL: "https://gb-lesson8-hw-default-rtdb.firebaseio.com",
    projectId: "gb-lesson8-hw",
    storageBucket: "gb-lesson8-hw.appspot.com",
    messagingSenderId: "300459402993",
    appId: "1:300459402993:web:3713e74735e287b99a2b50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();

export function signup(email, password) {
    console.log(email, password);
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}
