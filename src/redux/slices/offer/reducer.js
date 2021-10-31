import { fetchOffersAsync } from '../../thunk/fetchOffersAsync';
import data from '../../../data/offers.json';

export function caseReducer(builder) {
  builder
    .addCase(fetchOffersAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchOffersAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload) {
        state.value = action.payload;
      } else {
        // when API stops sending data
        state.value = data.offers;
      }
    })
    .addCase(fetchOffersAsync.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.error;
    });
}
