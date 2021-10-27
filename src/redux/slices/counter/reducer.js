import { fetchOffersAsync } from '../../thunk/fetchOffersAsync';

export function caseReducer(builder) {
  builder
    .addCase(fetchOffersAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchOffersAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value += action.payload;
    })
    .addCase(fetchOffersAsync.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.error;
    });
}
