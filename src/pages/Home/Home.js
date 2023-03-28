import { useState, useEffect } from 'react';
import { getTrending } from '../../components/services/searchApi';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { toastError } from 'components/services/toasts';

// import { Box } from '../../components/Box';
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => {
        console.log(res);
        setMovies(res.results);
      })
      .catch(error => {
        console.log('ОЙОЙОЙОЙ', error);
        toastError();
      });
    console.log('movie:', movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>20 Most Popular Movies Right Now</h1>
      <FilmsList data={movies} />
    </>
  );
};
