import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './components/ProfilePage';

const RouteSwitch = () => {
  const [state, setState] = useState({
    username: 'user1001',
    posts: [
      {
        poster: 'Ryan Skeans',
        post: 'this is Ryans post',
        likes: 3,
        comments: [
          {
            commenter: 'John Smith',
            comment: 'Love this!',
          },
        ],
      },
      {
        poster: 'John Smith',
        post: 'this is Johns post',
        likes: 2,
        comments: [
          {
            commenter: 'Ryan Skeans',
            comment: 'Fantastic!',
          },
        ],
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
