import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../containers/App';
import CategoryFilter from '../components/navbar';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

afterEach(cleanup);

test('Renders the app enterely', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Contains the navbar', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Provider store={store}>
        <CategoryFilter />
      </Provider>
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
