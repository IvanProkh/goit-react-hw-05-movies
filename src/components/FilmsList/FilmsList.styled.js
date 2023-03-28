import styled from 'styled-components';

export const FilmsListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]}px;
`;

export const FilmsListItem = styled.li`
  text-align: center;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleFirst};
  }
`;
