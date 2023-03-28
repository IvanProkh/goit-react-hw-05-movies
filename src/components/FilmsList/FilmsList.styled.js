import styled from 'styled-components';

export const FilmsListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]}px;

  margin-left: 160px;
  margin-right: 160px;
`;

export const FilmsListItem = styled.li`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleFirst};
  }
`;
