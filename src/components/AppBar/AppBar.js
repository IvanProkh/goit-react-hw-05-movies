import { Box } from '../Box';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme';
import {
  AppBarList,
  AppBarItem,
  AppBarTitle,
  // AppBarUser,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      p={3}
      bg={theme.colors.bg_dark}
      boxShadow="shadow"
    >
      <AppBarTitle to="/">Filmopolis</AppBarTitle>
      <AppBarList>
        <AppBarItem>
          <NavLink to="/">Home</NavLink>
        </AppBarItem>
        <AppBarItem>
          <NavLink to="/movies">Movies</NavLink>
        </AppBarItem>
      </AppBarList>
    </Box>
  );
};
