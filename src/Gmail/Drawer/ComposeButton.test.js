import React from 'react';
import ReactDOM from 'react-dom';
import ComposeButton from './ComposeButton';
import { render, waitForElement, fireEvent } from 'react-testing-library'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import composeReducer from '../../store/reducers'

const store = configureStore()

test('renders without crashing', async () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <ComposeButton />
    </Provider>
  );
  fireEvent.click(getByText('Compose'));
  await waitForElement(() => getByTestId('compose-button'));
});
