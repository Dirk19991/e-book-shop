import { Products } from './Homepage';
import { GridHeader } from '../Components/GridHeader';
import styled from 'styled-components';
import { ClearCart } from '../Components/ClearCart';
import { removeFromCart } from '../functions';
import { Quantity } from '../Components/Quantity';

const Grid = styled.div`
  display: grid;
  width: 1400px;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  align-content: center;

  & > div {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 900;
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  
`;

const Image = styled.img`
  position: relative;
  max-width: 100%;
  height: 150px;
  display: block;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    margin: 1rem 0;
    height: 250px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 1 / 7;
  }
`;

const QuantityWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 1;
  }
`;

const IconWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 2;
  }
`;

const TitleWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 3;
  }
`;

const PriceWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 4;
  }
`;

const TotalWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 5;
  }
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
                  <ImageWrapper>
                    <Image src={elem.img}></Image>
                  </ImageWrapper>
                  <TitleWrapper>{elem.title}</TitleWrapper>
                  <PriceWrapper>{elem.price} RUB</PriceWrapper>

                  <QuantityWrapper>
                    <Quantity
                      items={items}
                      setItems={setItems}
                      id={elem.id}
                      count={elem.count}
                    />
                  </QuantityWrapper>

                  <IconWrapper
                    onClick={() =>
                      setItems(() =>
                        items.map((item) => removeFromCart(item, elem.id))
                      )
                    }>
                    <Icon className='fa-solid fa-trash-can'></Icon>
                  </IconWrapper>

                  <TotalWrapper>
                    <Total>Item Total: </Total>
                    {elem.total} RUB
                  </TotalWrapper>
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
