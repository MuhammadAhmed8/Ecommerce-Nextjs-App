import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#CA0303',
    },
    secondary: {
      main: '#333',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  props: {
    MuiButton: {
      disableElevation: true
   }
  },
  typography: {
    fontFamily: [
      '"Helvetica"',
      'sans-serif',
    ].join(','),
    allVariants: {
      color: '#333'
    }
  }
});

theme.typography.h2 = {
  fontSize: '3rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2.4rem',
 },
  [theme.breakpoints.up('md')]: {
     fontSize: '3rem',
  },
};

theme.typography.h3 = {
  fontSize: '2.5rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.8rem',
 },
  [theme.breakpoints.up('md')]: {
     fontSize: '2.4rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.4rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.2rem',
 },
  [theme.breakpoints.up('md')]: {
     fontSize: '1.4rem',
  },
};

export default theme;