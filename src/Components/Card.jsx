import styled from 'styled-components';
import { addToCart } from '../functions';
import { useEffect, useState } from 'react';

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
  width: 120px;
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

const GreenButton = styled(Button)`
  background-color: green;
`;

const Buy = styled.div`
  font-size: 1.5rem;
  translate: 0 -0.1rem;
`;

export const Card = ({ id, title, img, price, items, setItems }) => {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdded(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [added]);

  return (
    <StyledCard>
      <Wrapper>
        <Img src={img} alt={title}></Img>
      </Wrapper>

      {added ? (
        <GreenButton>
          <Buy>Added!</Buy>
        </GreenButton>
      ) : (
        <Button
          onClick={() => {
            setItems((items) => items.map((item) => addToCart(item, id)));
            setAdded(true);
          }}>
          <Buy>Buy</Buy>
          <Icon className='fa-solid fa-2x fa-cart-plus'></Icon>
        </Button>
      )}

      <Text>
        <div>{title}</div>
        <Price>{price} rub.</Price>
      </Text>
    </StyledCard>
  );
};
