import { Box } from '../Box';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <Box as="header" mb={5} p={3} bg="#483233" boxShadow="shadow">
      <Box as="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </Box>
    </Box>
  );
};
