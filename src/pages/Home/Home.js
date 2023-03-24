import React, { useState, useEffect } from 'react';
import { searchMovie, topMovie } from '../../components/services/searchApi';

import { Box } from '../../components/Box';
export const Home = () => {
  // const [film, setFilm] = useState([]);

  topMovie().then(response => {
    console.log(response);
    setFilm(response);
    console.log('film:', film);
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justify-content="center"
      m={2}
      p={3}
    >
      <ul>
        {film.map(({ id, poster_path }) => (
          <li key={id}>{poster_path}</li>
        ))}
      </ul>
    </Box>
  );
};
