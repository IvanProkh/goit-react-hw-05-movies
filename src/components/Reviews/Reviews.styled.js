import styled from 'styled-components';

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 160px;

  div {
    margin: 10px 0px;
  }

  span {
    color: ${p => p.theme.colors.primary};
  }

  p {
    text-align: justify;
  }
`;

export const EmptyReviews = styled.p`
  text-align: center;
  font-sizes: 18px;
`;
