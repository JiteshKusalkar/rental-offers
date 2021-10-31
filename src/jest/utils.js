import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import store from '../redux/store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const AllTheProviders = ({ children }) => {
  return <Provider store={mockStore(store.getState())}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const wrapper = ({ children }) => <div>{children}</div>;

const wrapperWithProvider = ({ children }) =>
  wrapper({ children: <Provider store={mockStore(store.getState())}>{children}</Provider> });

export { customRender as render, wrapper, wrapperWithProvider };
