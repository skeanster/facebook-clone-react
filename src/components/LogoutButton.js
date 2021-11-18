import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCwZKvNHtNsjNO_aeXCdeFeXn4-YOM1xw8',
  authDomain: 'facebook-clone-a72c0.firebaseapp.com',
  projectId: 'facebook-clone-a72c0',
  storageBucket: 'facebook-clone-a72c0.appspot.com',
  messagingSenderId: '964855994482',
  appId: '1:964855994482:web:e93ffafcc1bc961c524aeb',
  measurementId: 'G-2DNZTHXNZ1',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function LogoutButton() {
  return (
    auth.currentUser && (
      <button className="signOut" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default LogoutButton;
