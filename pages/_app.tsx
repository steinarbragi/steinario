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
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'fontsource-aleo';
import 'fontsource-roboto-mono';
import 'fontsource-oswald';
import GlobalStyle from '../components/styles/globals';
import 'react-multi-carousel/lib/styles.css';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7539',
      main: '#ff3d00',
      dark: '#c30000',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Aleo',
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
                sizes="57x57"
                href="/apple-icon-57x57.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/apple-icon-60x60.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-icon-72x72.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-icon-76x76.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-icon-114x114.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-icon-120x120.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-icon-144x144.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-icon-152x152.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
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
                sizes="96x96"
                href="/favicon-96x96.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/manifest.json" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta
                name="msapplication-TileImage"
                content="/ms-icon-144x144.png"
              />
              <meta name="theme-color" content="#ffffff" />
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
