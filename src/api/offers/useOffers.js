import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOffers, selectOffersError, selectOffersStatus } from '~slices/offer';
import { fetchOffersAsync } from '~thunk/fetchOffersAsync';

function useOffers() {
  const dispatch = useDispatch();
  const offers = useSelector(selectOffers);
  const error = useSelector(selectOffersError);
  const status = useSelector(selectOffersStatus);

  const fetchOffers = useCallback(
    () => dispatch(fetchOffersAsync()),
    [dispatch]
  );

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return { fetchOffers, offers, error, status };
}

export default useOffers;
