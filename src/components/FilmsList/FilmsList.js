// import PropTypes from 'prop-types';

export const FilmsList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, title, poster_path }) => (
        <li key={id}>
          <img src={poster_path} alt={title} />
        </li>
      ))}
    </ul>
  );
};

// FilmsList.propTypes = {
//   data: PropTypes.array.isRequired,
// };
