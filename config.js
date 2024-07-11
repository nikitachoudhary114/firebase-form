// const firebase = require("firebase");
// // import firebase from 'firebase/app';
// // import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBggUIbX5bhHz6CIteoRvIKtxfxNoDpdZQ",
//     authDomain: "form-data-b8743.firebaseapp.com",
//     projectId: "form-data-b8743",
//     storageBucket: "form-data-b8743.appspot.com",
//     messagingSenderId: "1018856483747",
//     appId: "1:1018856483747:web:e354bf6bbe5d4e01cf4816",
//     measurementId: "G-S8VXVT7PC7"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
// const User = db.collection("Users");
// module.exports = User;


// const admin = require('firebase-admin');

// const firebaseConfig = {
//     apiKey: "AIzaSyBggUIbX5bhHz6CIteoRvIKtxfxNoDpdZQ",
//     authDomain: "form-data-b8743.firebaseapp.com",
//     projectId: "form-data-b8743",
//     storageBucket: "form-data-b8743.appspot.com",
//     messagingSenderId: "1018856483747",
//     appId: "1:1018856483747:web:e354bf6bbe5d4e01cf4816",
//     measurementId: "G-S8VXVT7PC7"
// };

// admin.initializeApp({
//     credential: admin.credential.cert(firebaseConfig),
//     databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
// });

// const db = admin.firestore();
// const User = db.collection("Users");

// module.exports = User;


const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const db = admin.firestore();
const User = db.collection("Users");

module.exports = User;
