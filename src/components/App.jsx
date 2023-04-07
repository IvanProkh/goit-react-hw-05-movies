import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from 'react-loader-spinner';
import { ThreeCirclesStyle } from '../components/services/spinner';

import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';

// import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
// import {MovieDetails} from '../pages/MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));

const Movies = lazy(() => import('../pages/Movies/Movies'));

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('../components/Cast/Cast'));

const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar />
      {/* <ProgressBar /> */}
      <Suspense fallback={<ThreeCircles {...ThreeCirclesStyle} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
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
