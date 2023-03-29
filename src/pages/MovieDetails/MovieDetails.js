import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  searchImages,
} from '../../components/services/searchApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails('movieId')
      .then(setMovie)
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  const imgPoster = searchImages(poster_path);

  return (
    <>
      <img src={imgPoster} alt={title} />
      <p>{title}</p>
    </>
  );
};
