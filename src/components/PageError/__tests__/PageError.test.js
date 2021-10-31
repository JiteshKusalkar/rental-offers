import { render } from '@testing-library/react';
import PageError from '../PageError';

describe('PageError', () => {
  it('should render the component', () => {
    const { container } = render(<PageError />);

    expect(container).toMatchSnapshot();
  });
});
