import { Box } from '../Box';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';

export const AppBar = () => {
  return (
    <Box
      as="header"
      flex
      alignItems="center"
      mb={5}
      p={3}
      bg={theme.colors.bg_dark}
      boxShadow="shadow"
    >
      <h1 color={theme.colors.primary}>Filmopolis</h1>
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
