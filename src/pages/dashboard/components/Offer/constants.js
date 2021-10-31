import PropTypes from 'prop-types';

const modelExample = PropTypes.shape({
  imageUrl: PropTypes.string,
  name: PropTypes.string,
});

const carGroupInfo = PropTypes.shape({ modelExample });

const amount = PropTypes.shape({
  currency: PropTypes.string,
  display: PropTypes.string,
  value: PropTypes.number,
});

const totalPrice = PropTypes.shape({ amount });

const prices = PropTypes.shape({ totalPrice });

const offerProps = PropTypes.shape({
  carGroupInfo,
  prices,
  id: PropTypes.string.isRequired,
});

export { carGroupInfo, modelExample, offerProps };
