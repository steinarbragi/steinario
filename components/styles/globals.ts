import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Aleo;
    color: #ccc;
  }
  a {
    color: #004cff;
  }
  h1,h2,h3,h4, .MuiButton-label {
    font-family: "Oswald";
    color: #fff;
  }
  pre, code {
    font-family: "Roboto Mono";
  }
`;

export default GlobalStyle;
