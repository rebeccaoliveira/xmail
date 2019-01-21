import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitForElement, fireEvent } from 'react-testing-library'


test('renders without crashing', async () => {
  const { getByText } = render( <App />);
  await waitForElement(() => getByText('Compose'));
});

test('renders without crashing', async () => {
  const { getByText } = render( <App />);
  await waitForElement(() => getByText('Important'));
});
