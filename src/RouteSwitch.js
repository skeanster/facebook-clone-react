import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProfilePage from './ProfilePage';

const RouteSwitch = () => {
  const [state, setState] = useState({
    username: 'user1001',
    posts: [
      {
        poster: 'Ryan Skeans',
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
        likes: 1,
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
        <Route path="/" element={<App username={state.username} />} />
        <Route
          path="/ProfilePage"
          element={<ProfilePage username={state.username} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
