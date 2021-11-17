import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage';
import uniqid from 'uniqid';

const RouteSwitch = () => {
  const [state, setState] = useState({
    username: 'user1001',
    posts: [
      {
        id: uniqid(),
        poster: 'John Smith',
        post: 'Try changing your profile name, likeing a post, leaving a comment, or making a post of your own!',
        likes: 3,
        comments: [
          {
            commenter: 'Ryan Skeans',
            comment: 'Try it!',
          },
        ],
        liked: false,
      },
      {
        id: uniqid(),
        poster: 'Ryan Skeans',
        post: 'Thank you for visiting my web app!',
        likes: 2,
        comments: [
          {
            commenter: 'John Smith',
            comment: 'Fantastic!',
          },
          {
            commenter: 'Jane Doe',
            comment: 'Love it!',
          },
        ],
        liked: false,
      },
      {
        id: uniqid(),
        poster: 'Iron Man',
        post: 'I love you 3000.',
        likes: 278,
        comments: [],
        liked: false,
      },
      {
        id: uniqid(),
        poster: 'Hulk',
        post: 'Smash!',
        likes: 8,
        comments: [],
        liked: false,
      },
      {
        id: uniqid(),
        poster: 'Party Thor',
        post: 'Has anybody seen Jane?',
        likes: 6,
        comments: [],
        liked: false,
      },
      {
        id: uniqid(),
        poster: 'Wong',
        post: 'It probably would have been a really fun wedding...',
        likes: 2,
        comments: [],
        liked: false,
      },
    ],
  });

  const newPost = (content) => {
    setState({
      username: state.username,
      posts: [
        {
          id: uniqid(),
          poster: state.username,
          post: content,
          likes: 0,
          comments: [],
          liked: false,
        },
      ].concat(state.posts),
    });
  };

  const like = (like) => {
    let postID = like.target.parentNode.parentNode.id;
    let itemExist = state.posts.find(({ id }) => id === postID);
    let indexOfItem = state.posts.indexOf(itemExist);
    let tempArray = [...state.posts];
    let tempItem = { ...tempArray[indexOfItem] };
    const postInQuestion = tempItem;

    if (postInQuestion.liked === false) {
      tempItem.liked = true;
      tempItem.likes = tempItem.likes + 1;
      tempArray[indexOfItem] = tempItem;
      setState({
        username: state.username,
        posts: tempArray,
      });
      return;
    } else {
      tempItem.liked = false;
      tempItem.likes = tempItem.likes - 1;
      tempArray[indexOfItem] = tempItem;
      setState({
        username: state.username,
        posts: tempArray,
      });
      return;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/facebook-clone-react"
          element={
            <App
              username={state.username}
              posts={state.posts}
              newPost={newPost}
              like={like}
            />
          }
        />
        <Route
          path="/facebook-clone-react/ProfilePage"
          element={<ProfilePage username={state.username} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
