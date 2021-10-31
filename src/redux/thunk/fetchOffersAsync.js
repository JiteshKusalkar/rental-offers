import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOffers } from '~api/offers';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchOffersAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchOffersAsync = createAsyncThunk(
  'offers/fetchOffers',
  async () => {
    const response = await fetchOffers();
    // The value we return becomes the `fulfilled` action payload
    return response.offers;
  }
);
