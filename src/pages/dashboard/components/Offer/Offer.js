import PropTypes from 'prop-types';
import Card from '~components/Card';
import Price from '~components/Price';
import { offerProps } from './constants';

import { Label, Section, Value, Wrapper } from './styles';

const img = 'https://www.kudosgarage.com/images/kudosgarage_CTA_wagon.png';

function Offer({ offer, className }) {
  return (
    <Card
      imageSrc={offer.carGroupInfo?.modelExample.imageUrl ?? img}
      imageAlt={offer.carGroupInfo?.modelExample.name ?? 'Unknown car'}
      className={className}
    >
      <Wrapper>
        <Section>
          <Label>Name:</Label>
          <Value>{offer.carGroupInfo?.modelExample.name ?? 'Unknown'}</Value>
        </Section>
        <Section>
          <Label>Price:</Label>
          <Price
            amount={offer.prices?.totalPrice.amount.value}
            currency={offer.prices?.totalPrice.amount.currency}
          />
        </Section>
      </Wrapper>
    </Card>
  );
}

Offer.propTypes = {
  offer: offerProps,
  className: PropTypes.string,
};

export default Offer;
