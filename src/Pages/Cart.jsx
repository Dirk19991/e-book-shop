import { Products } from "./Homepage";
import { GridHeader } from "../Components/GridHeader";
import styled from "styled-components";
import { ClearCart } from "../Components/ClearCart";
import { Item } from "../Components/Item";
import { Total } from "../Components/Total";

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

    @media (max-width: 1024px) {
      display: grid;
      grid-template-rows: repeat(6, 1fr);
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MobileCard = styled.div`
  width: 400px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Cart = ({ items, setItems, isMobile }) => {
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
              .map((elem) => {
                return isMobile ? (
                  <MobileCard>
                    <Item elem={elem} items={items} setItems={setItems} />
                  </MobileCard>
                ) : (
                  <Item elem={elem} items={items} setItems={setItems} />
                );
              })}
          {items?.some((item) => item.count !== 0) && (
            <ClearCart items={items} setItems={setItems} />
          )}
          {items?.some((item) => item.count !== 0) && (
            <Total items={items} setItems={setItems} />
          )}
        </Grid>
      </Wrapper>
    </>
  );
};
