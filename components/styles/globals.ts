import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto, sans-serif;  
  }
  a {
    color: #12a8f3;
  }
  pre, code {
    font-family: monospace,monospace;
  }
`;

export default GlobalStyle;
