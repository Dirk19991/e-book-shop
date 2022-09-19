import styled from 'styled-components';
import { useEffect } from 'react';
import { removeFromCart } from '../functions';
import { storeProducts } from '../data';

const ClearCartButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1.2rem;
  border: solid red 2px;
  border-radius: 0.5rem;
  color: red;
  cursor: pointer;
`;

const Wrapper = styled.div`
  grid-column-start: 6;
  grid-column-end: 7;
  justify-self: center;
  padding-bottom: 1rem;
`;

export const ClearCart = ({ items, setItems }) => {
  return (
    <Wrapper>
      <ClearCartButton
        onClick={() => setItems((items) => removeFromCart(items))}>
        CLEAR CART
      </ClearCartButton>
    </Wrapper>
  );
};
