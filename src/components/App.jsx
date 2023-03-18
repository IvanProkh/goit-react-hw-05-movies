// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProgressBar } from 'react-loader-spinner';

export const App = () => {
  return (
    <>
      <ProgressBar />
      <Routes>
        <Route>Film</Route>
      </Routes>

      <ToastContainer autoClose={3000} />
    </>
  );
};
