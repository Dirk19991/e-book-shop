import styled from 'styled-components';
import { addToCart, removeItemFromCart } from '../functions';

const Square = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border: solid black 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
`;

const Increase = styled(Square)`
  cursor: pointer;
`;

const Decrease = styled(Square)`
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  gap: 0.15rem;
`;

export const Quantity = ({ count, id, items, setItems }) => {
  console.log(count, id, setItems);

  return (
    <Flex>
      <Decrease
        onClick={() =>
          setItems(() => items.map((item) => removeItemFromCart(item, id)))
        }>
        -
      </Decrease>
      <Square>{count}</Square>
      <Increase
        onClick={() => {
          setItems((items) => items.map((item) => addToCart(item, id)));
        }}>
        +
      </Increase>
    </Flex>
  );
};
