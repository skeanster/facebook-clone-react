import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage';
import LogIn from './components/LogIn';
import {
  auth,
  firebase,
  postsRef,
  query,
  useAuthState,
  useCollectionData,
  arrayUnion,
  uniqid,
} from './components/Firebase';

const RouteSwitch = () => {
  const [state, setState] = useState('Anonymous');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user.displayName !== null) {
        setState(user.displayName);
      } else {
        setState('Anonymous');
      }
    });
  }, []);

  const [user] = useAuthState(auth);
  const [posts] = useCollectionData(query);

  const newPost = async (e) => {
    e.preventDefault();
    let documentId = uniqid();
    await postsRef.doc(documentId).set({
      id: documentId,
      poster: state,
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
        commenter: state,
        comment: e.target.childNodes[0].value,
      }),
    });

    e.target.childNodes[0].value = '';
    return;
  };

  const changeUsername = async (e) => {
    e.preventDefault();
    await auth.currentUser.updateProfile({
      displayName: e.target.childNodes[0].value,
    });
    setState(auth.currentUser.displayName);

    e.target.childNodes[0].value = '';
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/facebook-clone-react"
          element={
            user ? (
              <App
                username={state}
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
              <ProfilePage username={state} changeUsername={changeUsername} />
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
