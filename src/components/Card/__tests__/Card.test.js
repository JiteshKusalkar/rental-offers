import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('should render the component with valid props', () => {
    const props = {
      imageSrc: 'http://imageSrc',
      imageAlt: 'Image',
      imageWidth: 300,
      imageHeight: 300,
    };
    const { container } = render(<Card {...props}>Card content</Card>);

    expect(container).toMatchSnapshot();
  });

  it('should render the component with default props', () => {
    const props = {
      imageSrc: 'http://imageSrc',
      imageAlt: 'Image',
    };
    const { container } = render(<Card {...props}>Card content</Card>);

    expect(container).toMatchSnapshot();
  });
});
