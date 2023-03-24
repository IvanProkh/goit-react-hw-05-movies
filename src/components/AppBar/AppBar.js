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
      // justify-content="space-around"
      // flex-direction="column"
      m={0}
      p={3}
      bg={theme.colors.bg_dark}
      boxShadow="shadow"
    >
      <AppBarTitle to="/">Filmopolis</AppBarTitle>
      <Box as="nav" display="flex" align-items="center">
        <AppBarList>
          <AppBarItem>
            <NavLink to="/">Home</NavLink>
          </AppBarItem>
          <AppBarItem>
            <NavLink to="/movies">Movies</NavLink>
          </AppBarItem>
        </AppBarList>
        {/* <div>
          <label>
            <input text="Serch" type="search" />
          </label>

          <AppBarUser></AppBarUser>
        </div> */}
      </Box>
    </Box>
  );
};