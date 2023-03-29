// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ProgressBar } from 'react-loader-spinner';

import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <AppBar />
      {/* <ProgressBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" />
          <Route path="reviews" />
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
