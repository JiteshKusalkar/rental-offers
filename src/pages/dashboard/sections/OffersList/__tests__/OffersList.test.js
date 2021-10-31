import { screen } from '@testing-library/react';
import { useOffers } from '~api/offers';
import data from '~data/offers.json';
import { render } from '~jest/utils';
import server from '~mocks/server';
import OffersList from '../OffersList';

jest.mock('~api/offers/useOffers');

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe('OffersList', () => {
  const mockUseOffers = useOffers;

  it('should show loader', () => {
    mockUseOffers.mockImplementation(() => ({
      offers: [],
      status: 'loading',
      error: null,
    }));
    render(<OffersList />);

    const loadingState = screen.getByText('Loading...');
    expect(loadingState).toBeInTheDocument();
  });

  it('should show error', () => {
    mockUseOffers.mockImplementation(() => ({
      offers: [],
      status: 'idle',
      error: new Error('message'),
    }));
    render(<OffersList />);

    const listHeader = screen.getByText('404');
    expect(listHeader).toBeInTheDocument();
  });

  it('should show offers list', () => {
    mockUseOffers.mockImplementation(() => ({
      offers: [data.offers[0]],
      status: 'idle',
      error: null,
    }));
    render(<OffersList />);

    const listHeader = screen.getByText('Audi A3 Sedan');
    expect(listHeader).toBeInTheDocument();
  });
});
