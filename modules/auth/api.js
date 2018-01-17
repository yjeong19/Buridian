import axios from 'axios';

import firebase from "../../config/firebase";
import {constants as c} from "./";

const auth = firebase.auth();
const database = firebase.database();
const provider = firebase.auth.FacebookAuthProvider;

//Create the new user using email and password
export function register(data, callback) {
    var { email, password } = data;
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => callback(true, user, null))
        .catch((error) => callback(false, null, error));
}

//Sign the user in with their email and password
export function login(data, callback) {
    var { email, password } = data;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => callback(true, user, null))
        .catch((error) => callback(false, null, error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
    var { email } = data;
    auth.sendPasswordResetEmail(email)
        .then((user) => callback(true, null, null))
        .catch((error) => callback(false, null, error));
}

export function signOut (callback) {
    auth.signOut().then(() => callback(true, null, null))
        .catch((error) => callback(false, null, {message: error}));
}
