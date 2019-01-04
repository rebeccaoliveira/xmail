import React, { Component } from 'react';
import Gmail from './Gmail/index';
import { BrowserRouter as Router} from "react-router-dom"

import CssBaseline from './config/CssBaseline'
import ThemeProvider from './config/ThemeProvider'
import configureStore from './store'
import { Provider } from 'react-redux'
import AppResize from './AppResize'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <CssBaseline />
          <ThemeProvider>
            <Gmail />
          </ThemeProvider>
          <AppResize />
        </Provider>
      </Router>
    );
  }
}

export default App;
