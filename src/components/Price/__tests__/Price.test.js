import { render, screen } from '@testing-library/react';
import Price from '../Price';

describe('Price', () => {
  it('should render the price with EUR symbol', () => {
    render(<Price currency="EUR" amount={231.99} locale="en-EU" />);
    const price = screen.getByText('€231.99', { exact: true });

    expect(price).toBeInTheDocument();
  });

  it('should render the price with USD symbol', () => {
    render(<Price currency="USD" amount={231.99} locale="en-US" />);
    const price = screen.getByText('$231.99', { exact: true });

    expect(price).toBeInTheDocument();
  });
});
