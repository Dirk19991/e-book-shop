import styled from 'styled-components';
import { addToCart } from '../functions';
import { useEffect } from 'react';

const StyledCard = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const Img = styled.img`
  position: relative;
  max-width: 100%;
  height: 300px;
  display: block;
  margin: 2rem 0;
`;

const Text = styled.div`
  width: 100%;
  padding: 2rem;
  font-size: 1.1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-end;
`;

const Price = styled.div`
  font-weight: 900;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: scale ease-in-out 0.5s, opacity ease-in-out 0.5s;

  &:hover {
    scale: 1.1;
    opacity: 0.3;
    transition: scale ease-in-out 0.5s, opacity ease-in-out 0.5s;
  }
`;

const Icon = styled.i`
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem;
  min-width: 100px;
  height: 50px;
  background-color: var(--mainBlue);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  border-radius: 15px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

const Buy = styled.div`
  font-size: 1.5rem;
  translate: 0 -0.1rem;
`;

export const Card = ({ id, title, img, price, items, setItems }) => {
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(items));
  }, [items]);

  return (
    <StyledCard>
      <Wrapper>
        <Img src={img} alt={title}></Img>
      </Wrapper>

      <Button
        onClick={() => {
          setItems(items.map((item) => addToCart(item, id)));
        }}>
        <Buy>Buy</Buy>
        <Icon className='fa-solid fa-2x fa-cart-plus'></Icon>
      </Button>

      <Text>
        <div>{title}</div>
        <Price>{price} rub.</Price>
      </Text>
    </StyledCard>
  );
};
