import { render, screen } from '@testing-library/react';
import Offer from '../Offer';
import data from '~data/offers.json';

describe('Offer', () => {
  it('should render the car name', () => {
    const offer = data.offers[0];
    render(<Offer offer={offer} />);

    const name = screen.getByText('Audi A3 Sedan', { exact: true });

    expect(name).toBeInTheDocument();
  });

  it('should render the car price', () => {
    const offer = data.offers[0];
    render(<Offer offer={offer} />);

    const price = screen.getByText('€209.96', { exact: true });

    expect(price).toBeInTheDocument();
  });

  it('should render without car image', () => {
    const offer = {
      ...data.offers[0],
      carGroupInfo: { ...data.offers[0].carGroupInfo, modelExample: {} },
    };
    render(<Offer offer={offer} />);

    const image = screen.getByAltText('Unknown car');

    expect(image.src).toContain(
      'https://www.kudosgarage.com/images/kudosgarage_CTA_wagon.png'
    );
  });

  it('should render without car image alt as unknown car', () => {
    const offer = {
      ...data.offers[0],
      carGroupInfo: { ...data.offers[0].carGroupInfo, modelExample: {} },
    };
    render(<Offer offer={offer} />);

    const image = screen.getByAltText('Unknown car');

    expect(image).toBeInTheDocument();
  });
});
