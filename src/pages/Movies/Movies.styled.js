import styled from 'styled-components';

export const MoviesForm = styled.form`
  & input {
    display: block;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};

    height: 48px;
    width: 300px;
    margin: 15px auto;

    border-radius: 5px;
    border: none;

    ::placeholder {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
