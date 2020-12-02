/* eslint-disable react/no-danger */
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import GlobalStyle from '../components/styles/globals';
import 'react-multi-carousel/lib/styles.css';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#cfd8dc',
      dark: '#9ea7aa',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff7539',
      main: '#ff3d00',
      dark: '#c30000',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Axia Web',
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#3f51b5',
        borderWidth: '2px',
      },
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#3f51b5',
          color: 'white',
          fieldset: {
            color: 'white',
          },
        },
      },
    },
    MuiButton: {
      outlined: {
        borderWidth: '2px',
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'white',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ParallaxProvider>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Steinar.io</title>
            </Head>

            <GlobalStyle />
            <Component theme={theme} {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
