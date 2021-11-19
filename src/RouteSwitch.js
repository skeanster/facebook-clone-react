import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage';
import LogIn from './components/LogIn';
import uniqid from 'uniqid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { arrayUnion, arrayRemove } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

const RouteSwitch = () => {
  const [state, setState] = useState({
    username: 'Default-Username',
  });

  const newPost = async (e) => {
    e.preventDefault();
    let documentId = uniqid();
    await postsRef.doc(documentId).set({
      id: documentId,
      poster: state.username,
      post: e.target.childNodes[0].value,
      likes: [],
      comments: [],
    });
    e.target.childNodes[0].value = '';
  };

  const checkLike = (post) => {
    let currentDoc = post;
    if (currentDoc.likes.find((element) => element === user.uid)) {
      return true;
    } else {
      return false;
    }
  };

  const like = async (like) => {
    let currentDoc = await postsRef.doc(like.target.parentNode.parentNode.id);
    if (
      await (await currentDoc.get())
        .data()
        .likes.find((element) => element === user.uid)
    ) {
      await currentDoc.update({
        likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
      });
      return false;
    } else {
      await currentDoc.update({
        likes: arrayUnion(user.uid),
      });
      return true;
    }
  };

  const newComment = async (e) => {
    e.preventDefault();
    let currentDoc = await postsRef.doc(e.target.parentNode.parentNode.id);

    await currentDoc.update({
      comments: arrayUnion({
        commenter: state.username,
        comment: e.target.childNodes[0].value,
      }),
    });

    e.target.childNodes[0].value = '';
    return;
  };

  const changeUsername = (e) => {
    e.preventDefault();
    setState({
      username: e.target.childNodes[0].value,
      posts: state.posts,
    });
    e.target.childNodes[0].value = '';
  };

  const [user] = useAuthState(auth);

  const postsRef = firestore.collection('posts');
  const query = postsRef.limit(25);
  const [posts] = useCollectionData(query);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/facebook-clone-react"
          element={
            user ? (
              <App
                username={state.username}
                posts={posts}
                newPost={newPost}
                like={like}
                newComment={newComment}
                checkLike={checkLike}
              />
            ) : (
              <LogIn />
            )
          }
        />
        <Route
          path="/facebook-clone-react/ProfilePage"
          element={
            user ? (
              <ProfilePage
                username={state.username}
                changeUsername={changeUsername}
              />
            ) : (
              <LogIn />
            )
          }
        />
        <Route path="/facebook-clone-react/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
