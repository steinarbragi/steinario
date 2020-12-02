import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: Roboto, sans-serif;  
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular-webfont.eot');
    src: url('/fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Regular-webfont.woff') format('woff'),
         url('/fonts/Roboto-Regular-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Regular-webfont.svg#RobotoRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Italic-webfont.eot');
    src: url('/fonts/Roboto-Italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Italic-webfont.woff') format('woff'),
         url('/fonts/Roboto-Italic-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Italic-webfont.svg#RobotoItalic') format('svg');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold-webfont.eot');
    src: url('/fonts/Roboto-Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Bold-webfont.woff') format('woff'),
         url('/fonts/Roboto-Bold-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Bold-webfont.svg#RobotoBold') format('svg');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-BoldItalic-webfont.eot');
    src: url('/fonts/Roboto-BoldItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-BoldItalic-webfont.woff') format('woff'),
         url('/fonts/Roboto-BoldItalic-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-BoldItalic-webfont.svg#RobotoBoldItalic') format('svg');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Thin-webfont.eot');
    src: url('/fonts/Roboto-Thin-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Thin-webfont.woff') format('woff'),
         url('/fonts/Roboto-Thin-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Thin-webfont.svg#RobotoThin') format('svg');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-ThinItalic-webfont.eot');
    src: url('/fonts/Roboto-ThinItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-ThinItalic-webfont.woff') format('woff'),
         url('/fonts/Roboto-ThinItalic-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-ThinItalic-webfont.svg#RobotoThinItalic') format('svg'); (under the Apache Software License). 
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Light-webfont.eot');
    src: url('/fonts/Roboto-Light-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Light-webfont.woff') format('woff'),
         url('/fonts/Roboto-Light-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Light-webfont.svg#RobotoLight') format('svg');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-LightItalic-webfont.eot');
    src: url('/fonts/Roboto-LightItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-LightItalic-webfont.woff') format('woff'),
         url('/fonts/Roboto-LightItalic-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-LightItalic-webfont.svg#RobotoLightItalic') format('svg');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium-webfont.eot');
    src: url('/fonts/Roboto-Medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-Medium-webfont.woff') format('woff'),
         url('/fonts/Roboto-Medium-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-Medium-webfont.svg#RobotoMedium') format('svg');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-MediumItalic-webfont.eot');
    src: url('/fonts/Roboto-MediumItalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/Roboto-MediumItalic-webfont.woff') format('woff'),
         url('/fonts/Roboto-MediumItalic-webfont.ttf') format('truetype'),
         url('/fonts/Roboto-MediumItalic-webfont.svg#RobotoMediumItalic') format('svg');
    font-weight: 300;
    font-style: italic;
}

  body {
  font-family: Roboto, sans-serif;  
    margin: 0;
    position: relative;
  }
  h1,h2 {
  font-family: Roboto, sans-serif;  

  }
  a {
    color: #12a8f3;
  }
  body.fontLoaded {
  font-family: Roboto, sans-serif;  
  }

  .MuiTypography-root, .MuiInputBase-input .MuiFilledInput-input {
  font-family: Roboto, sans-serif;  
  }
  .MuiToolbar-root span {
  font-family: Roboto, sans-serif;  
  }

`;

export default GlobalStyle;
