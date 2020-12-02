import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Axia Web';
    src: url('/fonts/axia_web_Regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/axia_web_Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/axia_web_Regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/axia_web_Regular.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axia Web';
    src: url('/fonts/axia_web_Bold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/axia_web_Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/axia_web_Bold.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/axia_web_Bold.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axia Web';
    src: url('/fonts/axia_web_black.eot'); /* IE9 Compat Modes */
    src: url('/fonts/axia_web_black.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/axia_web_black.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/axia_web_black.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Axia Web';
    src: url('/fonts/axia_web_Light.eot'); /* IE9 Compat Modes */
    src: url('/fonts/axia_web_Light.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/axia_web_Light.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/axia_web_Light.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: lighter;
    font-style: normal;
  }

  body {
    font-family: 'Axia Web', Helvetica, Arial, sans-serif;
    margin: 0;
    position: relative;
  }
  h1,h2 {
    font-family: 'Axia Web', Helvetica, Arial, sans-serif;

  }
  a {
    color: #12a8f3;
  }
  body.fontLoaded {
    font-family: 'Axia Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .MuiTypography-root, .MuiInputBase-input .MuiFilledInput-input {
    font-family: 'Axia Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .MuiToolbar-root span {
    font-family: 'Axia Web', Helvetica, Arial, sans-serif;
  }

`;

export default GlobalStyle;
