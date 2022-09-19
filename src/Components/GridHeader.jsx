import styled from 'styled-components';

const GridHeaderDiv = styled.div`
  @media (max-width: 1024px) {
    display: none !important;
  }
`;

export const GridHeader = () => {
  return (
    <>
      <GridHeaderDiv>PRODUCT</GridHeaderDiv>
      <GridHeaderDiv>NAME OF PRODUCT</GridHeaderDiv>
      <GridHeaderDiv>PRICE</GridHeaderDiv>
      <GridHeaderDiv>QUANTITY</GridHeaderDiv>
      <GridHeaderDiv>REMOVE</GridHeaderDiv>
      <GridHeaderDiv>TOTAL</GridHeaderDiv>
    </>
  );
};
