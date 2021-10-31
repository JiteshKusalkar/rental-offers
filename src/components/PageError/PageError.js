import { Description, ErrorCode, Wrapper } from './styles';

function PageError() {
  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Description>Page could not be loaded</Description>
    </Wrapper>
  );
}

export default PageError;
