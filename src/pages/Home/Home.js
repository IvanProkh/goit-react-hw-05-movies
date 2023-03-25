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
        console.log('movie:', movies);
      })
      .catch(error => {
        console.log('ОЙОЙОЙОЙ', error);
        toastError();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FilmsList data={movies} />;
};
