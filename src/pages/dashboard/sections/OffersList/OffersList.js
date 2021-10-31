import { useOffers } from '~api/offers';
import PageError from '~components/PageError';
import { PageLoader } from '~components/Loader';
import Offer from '../../components/Offer';
import { Header, List, Wrapper } from './styles';

function OffersList() {
  const { offers, error, status } = useOffers();

  if (status === 'loading') {
    return <PageLoader>Loading...</PageLoader>;
  }

  if (error) {
    return <PageError />;
  }

  if (!offers || offers.length === 0) {
    return <div>Nothing to display</div>;
  }

  return (
    <Wrapper>
      <Header>Rental Offers</Header>
      <List>
        {offers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </List>
    </Wrapper>
  );
}

export default OffersList;
