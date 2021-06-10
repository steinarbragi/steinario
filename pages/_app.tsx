/* eslint-disable react/no-danger */
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import '@fontsource/aleo';
import '@fontsource/roboto-mono';
import '@fontsource/oswald';

import theme from '../styles/material';
import Meta from '../components/meta';
import GlobalStyle from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Meta />
          <GlobalStyle />
          <Component theme={theme} {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
