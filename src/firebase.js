import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAZMHsNA_yR7-P5YZijFYwzclaQ3kBnTXM",
    authDomain: "unichat-3b906.firebaseapp.com",
    projectId: "unichat-3b906",
    storageBucket: "unichat-3b906.appspot.com",
    messagingSenderId: "559084169828",
    appId: "1:559084169828:web:52dbcb23ebd4976156cd71"
  }).auth();