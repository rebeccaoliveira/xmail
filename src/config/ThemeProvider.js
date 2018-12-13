// React Import
import React from 'react'

// Package Imports
import { createMuiTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: indigo,
    secondary: amber,
    background: {
      default: '#fff'
    }
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)

export default ThemeProvider;
