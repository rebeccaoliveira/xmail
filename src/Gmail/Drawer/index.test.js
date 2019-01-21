import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './index';
import { render, waitForElement, fireEvent } from 'react-testing-library'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import composeReducer from '../../store/reducers'

const store = configureStore()

test('renders without crashing', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Drawer />
    </Provider>
  );
  fireEvent.click(getByTestId('open-drawer'));
  await waitForElement(() => getByTestId('open-drawer'));
});
