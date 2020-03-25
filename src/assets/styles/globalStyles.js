import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 1rem;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;

    @media (min-width: 2200px) {
      font-size: 22px;
    }
  }
`;

export default GlobalStyle;
