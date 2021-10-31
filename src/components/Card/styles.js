import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
  transition: all 0.18s ease;

  :hover {
    transition: all 0.18s ease;
    transform: translateY(-1px);
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
  }
`;
const Body = styled.div``;
const Img = styled.img``;

export { Body, Img, Wrapper };
