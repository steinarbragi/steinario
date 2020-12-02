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
              <title>Starborne | MMO Space Strategy Game | Play Free Now</title>
              <meta
                name="description"
                content="Starborne is a free PC Space MMORTS game set in a rich Sci-Fi world. Build and expand your empire, fight and forge alliances on a huge seamless strategic map."
              />
              <meta property="og:locale" content="en_US" />
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content="Starborne | MMO Space Strategy Game | Play Free Now"
              />
              <meta
                property="og:description"
                content="Starborne is a free PC Space MMORTS game set in a rich Sci-Fi world. Build and expand your empire, fight and forge alliances on a huge seamless strategic map."
              />
              <meta property="og:url" content="https://join.starborne.com/" />
              <meta
                property="og:site_name"
                content="Starborne Sovereign Space"
              />
              <meta property="og:image" content="/img/meta.png" />
              <meta property="og:image:secure_url" content="/img/meta.png" />
              <meta property="og:image:width" content="1024" />
              <meta property="og:image:height" content="576" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:description"
                content="Starborne is a free PC Space MMORTS game set in a rich Sci-Fi world. Build and expand your empire, fight and forge alliances on a huge seamless strategic map."
              />
              <meta
                name="twitter:title"
                content="Starborne | MMO Space Strategy Game | Join for Free Now"
              />
              <meta name="twitter:site" content="@starbornegame" />
              <meta name="twitter:image" content="/img/meta.png" />
              <meta name="twitter:creator" content="@starbornegame" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function (w, d, s, l, i) {
			w[l] = w[l] || []; w[l].push({
				'gtm.start':
					new Date().getTime(), event: 'gtm.js'
			}); var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
					'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-MRSPNPV');`,
                }}
              />
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRSPNPV" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
                }}
              />
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
