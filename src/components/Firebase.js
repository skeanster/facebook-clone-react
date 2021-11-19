import uniqid from 'uniqid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { arrayUnion, arrayRemove } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCwZKvNHtNsjNO_aeXCdeFeXn4-YOM1xw8',
  authDomain: 'facebook-clone-a72c0.firebaseapp.com',
  projectId: 'facebook-clone-a72c0',
  storageBucket: 'facebook-clone-a72c0.appspot.com',
  messagingSenderId: '964855994482',
  appId: '1:964855994482:web:e93ffafcc1bc961c524aeb',
  measurementId: 'G-2DNZTHXNZ1',
});

const firebaseConfig = {
  apiKey: 'AIzaSyCwZKvNHtNsjNO_aeXCdeFeXn4-YOM1xw8',
  authDomain: 'facebook-clone-a72c0.firebaseapp.com',
  projectId: 'facebook-clone-a72c0',
  storageBucket: 'facebook-clone-a72c0.appspot.com',
  messagingSenderId: '964855994482',
  appId: '1:964855994482:web:e93ffafcc1bc961c524aeb',
  measurementId: 'G-2DNZTHXNZ1',
};

const auth = firebase.auth();
const firestore = firebase.firestore();
const postsRef = firestore.collection('posts');
const usersRef = firestore.collection('users');
const query = postsRef.limit(25);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  const res = await auth.signInWithPopup(googleProvider);
  const user = res.user;
  let query = await firestore
    .collection('users')
    .where('uid', '==', user.uid)
    .get();
  if (query.docs.length === 0) {
    await firestore.collection('users').doc(user.uid).set({
      uid: user.uid,
      name: user.displayName,
      authProvider: 'google',
      email: user.email,
    });
  }
};

export {
  auth,
  firebase,
  firestore,
  postsRef,
  query,
  useAuthState,
  useCollectionData,
  arrayUnion,
  arrayRemove,
  uniqid,
  signInWithGoogle,
  firebaseConfig,
};
