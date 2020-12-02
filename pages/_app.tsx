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
    type: 'dark',
    primary: {
      main: '#111133',
      dark: '#0C1020',
      light: '#3f51b5',
    },
    secondary: {
      main: '#0e9688',
    },
  },
  typography: {
    fontFamily: 'Axia Web',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1100,
      lg: 1440,
      xl: 1920,
    },
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
        borderColor: '#3f51b5',
        borderWidth: '2px',
        backgroundColor: 'rgba(63,81,181,0.25)',
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
