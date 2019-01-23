import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './lists';
import { render, waitForElement, fireEvent } from 'react-testing-library'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import drawer from '../../store/reducers'

const store = configureStore()

test('renders without crashing', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SimpleList />
    </Provider>
  );
  await waitForElement(() => getByTestId('list'));
});
