import styled from 'styled-components';

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 160px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px;
  }

  img {
    max-width: 200px;
  }

  p {
    max-width: 200px;
    word-wrap: break-word;
    text-align: center;
  }
`;

export const EmptyCast = styled.p`
  margin: 20px 0px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
`;
