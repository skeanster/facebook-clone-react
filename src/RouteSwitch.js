import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage';

const RouteSwitch = () => {
  const [state, setState] = useState({
    username: 'user1001',
    posts: [
      {
        poster: 'John Smith',
        post: 'Try changing your profile name, likeing a post, leaving a comment, or making a post of your own!',
        likes: 3,
        comments: [
          {
            commenter: 'Ryan Skeans',
            comment: 'Try it!',
          },
        ],
      },
      {
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
      },
      {
        poster: 'Iron Man',
        post: 'I love you 3000.',
        likes: 278,
        comments: [],
      },
      {
        poster: 'Hulk',
        post: 'Smash!',
        likes: 8,
        comments: [],
      },
    ],
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/facebook-clone-react"
          element={<App username={state.username} posts={state.posts} />}
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
