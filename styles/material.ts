import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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

export default theme;
