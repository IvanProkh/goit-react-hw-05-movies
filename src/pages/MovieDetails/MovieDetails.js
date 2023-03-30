import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getMovieDetails,
  searchImages,
} from '../../components/services/searchApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  // const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => {
        console.log(err);
      })
      .finally(console.log(movie));

    console.log(movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <h2>
        {title} ({release_date})
      </h2>
      <p>Rating: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>
        Genres:{' '}
        {genres.map(genre => (
          <span key={genre.id}>{genre.name} </span>
        ))}
      </p>
    </>
  );
};
