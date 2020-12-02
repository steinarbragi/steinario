import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { StylesOptions } from '@material-ui/styles';
import GlobalStyle from '../components/styles/globals';
import { theme } from '../pages/_app';

/* Workaround for inconsistent classname prefixes 
that cause tests with Jest and Enzyme to fail when they shouldn't */
export const generateClassName: StylesOptions['generateClassName'] = (
  rule,
  sheet
): string => `${sheet?.options.classNamePrefix}-${rule.key}`;

export const provideTheme = (ui: ReactElement): ReactElement => {
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {ui}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default provideTheme;
