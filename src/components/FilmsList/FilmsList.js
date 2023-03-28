import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { searchImages } from '../services/searchApi';
import { FilmsListStyled, FilmsListItem } from '../FilmsList/FilmsList.styled';

export const FilmsList = ({ data }) => {
  return (
    <FilmsListStyled>
      {data.map(({ id, title, poster_path }) => {
        const imgPoster = searchImages(poster_path);
        console.log(imgPoster);
        return (
          <Link to={`/movies/${id}`} key={id}>
            <FilmsListItem>
              <img src={imgPoster} alt={title} />
              <p>{title}</p>
            </FilmsListItem>
          </Link>
        );
      })}
    </FilmsListStyled>
  );
};

FilmsList.propTypes = {
  data: PropTypes.array.isRequired,
};
