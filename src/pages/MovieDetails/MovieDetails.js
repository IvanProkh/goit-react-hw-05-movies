import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  getMovieDetails,
  searchImages,
} from '../../components/services/searchApi';

import { Box } from '../../components/Box';
import {
  NavList,
  NavLinkStyle,
  MovieDetailsStyle,
  MovieDetailsTitle,
  GoBackButtom,
  NavButtom,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();

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

  const goBack = () => navigate('/');
  const goToCast = () => navigate('cast');
  const gotoReviews = () => navigate('reviews');

  return (
    <>
      <main style={{ flexGrow: '1' }}>
        <GoBackButtom onClick={goBack}>Go back</GoBackButtom>
        <MovieDetailsStyle>
          <img src={imgPoster} alt={title} />
          <Box ml="20px">
            <h2>
              {title} ({new Date(release_date).getFullYear()})
            </h2>
            <p>
              <MovieDetailsTitle>Rating: </MovieDetailsTitle>
              {vote_average.toFixed(1)}
            </p>
            <p>
              <MovieDetailsTitle>Overview: </MovieDetailsTitle>
              {overview}
            </p>
            <p>
              <MovieDetailsTitle>Genres: </MovieDetailsTitle>
              {genres.map(genre => (
                <span key={genre.id}> {genre.name}</span>
              ))}
            </p>
          </Box>
        </MovieDetailsStyle>
        <NavList>
          <li>
            <NavButtom onClick={goToCast}>Cast</NavButtom>
          </li>
          <li>
            <NavButtom onClick={gotoReviews}>Reviews</NavButtom>
          </li>
        </NavList>
      </main>
      <Outlet />
    </>
  );
};
