import PropTypes from 'prop-types';
import { Body, Img, Wrapper } from './styles';

function Card({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  children,
  className,
}) {
  return (
    <Wrapper className={className}>
      <Img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth ?? 350}
        height={imageHeight ?? 250}
      />
      <Body>{children}</Body>
    </Wrapper>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
