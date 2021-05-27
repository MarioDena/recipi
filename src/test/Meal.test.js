import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Meal from '../components/meal';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

afterEach(cleanup);

test('Contains the Meal page entirely', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Meal />
      </Provider>
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
