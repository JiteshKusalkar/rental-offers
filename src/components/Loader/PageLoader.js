import PropTypes from 'prop-types';
import { Overlay, Wrapper } from './styles';

function PageLoader({ children }) {
  return (
    <Wrapper>
      <Overlay />
      {children}
    </Wrapper>
  );
}

PageLoader.propTypes = {
  children: PropTypes.node,
};

export default PageLoader;
