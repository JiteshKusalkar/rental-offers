import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './slices/offer';

const store = configureStore({
  reducer: combineReducers({
    offers: offersReducer,
  }),
});

export default store;
