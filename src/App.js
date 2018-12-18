import React, { Component } from 'react';
import Gmail from './Gmail/index';

import CssBaseline from './config/CssBaseline'
import ThemeProvider from './config/ThemeProvider'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider>
          <Gmail />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
