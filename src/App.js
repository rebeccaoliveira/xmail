import React, { Component } from 'react';
import Gmail from './Gmail/index';

import CssBaseline from './config/CssBaseline'
import ThemeProvider from './config/ThemeProvider'

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <ThemeProvider>
          <Gmail />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
