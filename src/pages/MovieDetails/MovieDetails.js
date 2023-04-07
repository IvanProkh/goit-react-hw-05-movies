import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  getMovieDetails,
  searchImages,
} from '../../components/services/searchApi';

import { Box } from '../../components/Box';
import {
  NavList,
  MovieDetailsStyle,
  MovieDetailsTitle,
  GoBackButtom,
  NavItemLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null); // заменили [] на null для начального состояния
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => {
        console.log('ошибка в муви', err);
      });
  }, [movieId]);

  if (!movie) {
    // заменили проверку на null
    return null;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  const imgPoster = searchImages(poster_path);

  const goBack = () => navigate(-1);

  const isCast = location.pathname.includes('cast');
  const castLink = isCast ? `/movies/${movieId}` : `/movies/${movieId}/cast`;

  const isReviews = location.pathname.includes('reviews');
  const reviewsLink = isReviews
    ? `/movies/${movieId}`
    : `/movies/${movieId}/reviews`;

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
            <NavItemLink to={castLink}>Cast</NavItemLink>
          </li>
          <li>
            <NavItemLink to={reviewsLink}>Reviews</NavItemLink>
          </li>
        </NavList>
      </main>
      <Outlet />
    </>
  );
}
