import { Products } from './Homepage';
import { GridHeader } from '../Components/GridHeader';
import styled from 'styled-components';
import { ClearCart } from '../Components/ClearCart';

const Grid = styled.div`
  display: grid;
  width: 1400px;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  align-content: center;

  & > div {
    display: flex;
    justify-content: center;
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  position: relative;
  max-width: 100%;
  height: 150px;
  display: block;
  margin: 2rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.i`
  cursor: pointer;
  color: var(--mainYellow);
`;

const Total = styled.span`
  white-space: pre;
  font-weight: 500;
`;

export const Cart = ({ items, setItems }) => {
  return (
    <>
      <Products>
        Your <span>Cart</span>
      </Products>
      <Wrapper>
        <Grid>
          <GridHeader />
          {items &&
            items
              .filter((elem) => elem.count !== 0)
              .map((elem) => (
                <>
                  <Wrapper>
                    <Image src={elem.img}></Image>
                  </Wrapper>

                  <div>{elem.title}</div>
                  <div>{elem.price} RUB</div>
                  <div>{elem.count}</div>
                  <Wrapper>
                    <Icon className='fa-solid fa-trash-can'></Icon>
                  </Wrapper>

                  <div>
                    <Total>Item Total: </Total>
                    {elem.total} RUB
                  </div>
                </>
              ))}
          {items?.some((item) => item.count !== 0) && (
            <ClearCart items={items} setItems={setItems} />
          )}
        </Grid>
      </Wrapper>
    </>
  );
};
