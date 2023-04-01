import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsStyle = styled.main`
  display: flex;
  margin: 20px 160px;

  img {
    max-height: 400px;
  }

  & h2 {
    color: ${p => p.theme.colors.primary};
  }

  & p {
    margin: 20px 20px 20px 0px;
    font-size: 18px;
    text-align: justify;
  }
`;

export const MovieDetailsTitle = styled.span`
  font-weight: bold;
`;

export const NavList = styled.ul`
  display: flex;

  margin-left: 160px;
  margin-right: 160px;
`;

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  background-color: ${p => p.theme.colors.bg_dark};
  height: 48px;
  width: 120px;
  border-radius: 5px;
  margin: 0 6px;
  border: ${p => p.theme.borders.none};
  transition: ${p => p.theme.transition.cubicBezier};

  &:hover {
    transform: ${p => p.theme.transform.scaleThird};
  }
`;
