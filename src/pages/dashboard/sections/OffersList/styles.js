import styled from 'styled-components';

const Wrapper = styled.div``;
const List = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
`;
const Header = styled.h1`
  text-align: center;
`;

export { Header, List, Wrapper };
