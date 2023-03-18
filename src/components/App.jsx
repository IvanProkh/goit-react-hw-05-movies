// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProgressBar } from 'react-loader-spinner';

import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <AppBar />
      <ProgressBar />
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/movies">movies</Route>
        <Route path="/movies/:movieId">
          <Route path="cast"></Route>
          <Route path="reviews"></Route>
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} />
    </>
  );
};

// Маршруты

// - "/" Home
//   - / movies
//     - / :movieId
//       - / cast
//       - / reviews
