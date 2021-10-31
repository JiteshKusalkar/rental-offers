import PropTypes from 'prop-types';
import { Body, Img, Wrapper } from './styles';

function Card({
  imageSrc,
  imageAlt,
  imageWidth = 350,
  imageHeight = 250,
  children,
  className,
}) {
  return (
    <Wrapper className={className}>
      <Img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <Body>{children}</Body>
    </Wrapper>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  className: PropTypes.string,
};

export default Card;
