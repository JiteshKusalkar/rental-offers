import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/slice';

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
  }),
});
