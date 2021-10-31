import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './slices/offer';

export const store = configureStore({
  reducer: combineReducers({
    offers: offersReducer,
  }),
});
