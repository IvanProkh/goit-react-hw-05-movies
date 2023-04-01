import styled from 'styled-components';

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin-top: 20px;
  background-color: ${p => p.theme.colors.bg_dark};

  :hover {
    cursor: default;
    color: ${p => p.theme.colors.primary};
  }

  a:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

export const FooterNav = styled.div`
  margin-top: 10px;

  a {
    margin: 5px;

    svg:hover {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;
