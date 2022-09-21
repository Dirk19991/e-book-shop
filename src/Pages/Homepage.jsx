import { storeProducts } from '../data';
import { BasicModal } from '../Components/Modal';
import { Card } from '../Components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem;
`;

export const Products = styled.h1`
  font-family: 'Permanent Marker', cursive;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;

  & > span {
    font-family: 'Permanent Marker', cursive;
    color: var(--mainBlue);
    margin-left: 1rem;
  }
`;

export const Homepage = ({ items, setItems }) => {
  return (
    <>
      <Products>
        Our <span>Products</span>
      </Products>
      <Wrapper>
        {storeProducts.map((elem) => (
          <Card items={items} setItems={setItems} {...elem} />
        ))}
      </Wrapper>
      <BasicModal></BasicModal>
    </>
  );
};
