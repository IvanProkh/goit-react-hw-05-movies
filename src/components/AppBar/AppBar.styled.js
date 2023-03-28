import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarTitle = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.primary};
  position: absolute;
  top: 13px;
  left: 160px;
`;

export const AppBarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  margin: 0px auto;
`;

export const AppBarItem = styled.li`
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleThird};
  }
  &:not(:first-child) {
    margin-left: ${p => p.theme.space[5]}px;
  }
`;

// export const AppBarUser = styled.button`
//   border-radius: 50%;
//   width: 32px;
//   height: 32px;
//   background-color: red;
// `;
