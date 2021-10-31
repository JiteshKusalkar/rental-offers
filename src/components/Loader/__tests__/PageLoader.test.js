import { render } from '@testing-library/react';
import PageLoader from '../PageLoader';

describe('PageLoader', () => {
  it('should render the component', () => {
    const { container } = render(<PageLoader>Card content</PageLoader>);

    expect(container).toMatchSnapshot();
  });
});
