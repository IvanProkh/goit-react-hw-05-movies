import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarTitle = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.primary};
  position: fixed;
  margin-left: 20px;
`;

export const AppBarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
`;

export const AppBarItem = styled.li`
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleThird};
    /* text-shadow: ${p => p.theme.shadows.shadowSecond}; */
  }
  &:not(:first-child) {
    margin-left: ${p => p.theme.space[5]}px;
  }
`;
