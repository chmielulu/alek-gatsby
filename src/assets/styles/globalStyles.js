import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
    overflow-x: hidden;
    max-width: 100vw;
  }

  input, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    padding: 0;
    cursor: pointer;
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

    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
