import { useState, useEffect } from 'react';
import { getTrending } from '../../components/services/searchApi';

import { FilmsList } from '../../components/FilmsList/FilmsList';
import { toastError } from 'components/services/toasts';

import { HomeTitle } from './Home.styled';
import { Box } from '../../components/Box';

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
      <Box>
        <HomeTitle>20 Most Popular Movies Right Now</HomeTitle>
        <FilmsList data={movies} />
      </Box>
    </>
  );
};
