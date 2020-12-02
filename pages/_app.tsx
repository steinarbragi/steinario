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
      light: '#b6ffff',
      main: '#81d4fa',
      dark: '#4ba3c7',
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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderWidth: '2px',
      },
      root: {
        '&$focused $notchedOutline': {
          color: 'secondary',
          fieldset: {},
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
        '&$focused': {},
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
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
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
