import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    lightGray: '#f5f5f5e9',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${theme.colors.lightGray};
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 14px; /* Diminui o tamanho do texto */
    }
  }

  @media screen and (max-width: 480px) {
    body {
      font-size: 12px; /* Para smartphones */
    }
  }
`;
