import styled from "styled-components";

import { removeFromCart } from "../functions";
import { Quantity } from "./Quantity";

const Image = styled.img`
  position: relative;
  max-width: 100%;
  height: 150px;
  display: block;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    margin: 1rem 0;
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    width: 200px;
    grid-row: 1 / 7;
    grid-column: 1 / 3;
  }
`;

const TitleWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 1;
    align-self: flex-end;
  }
`;

const PriceWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 2;
    align-self: flex-end;
  }
`;

const QuantityWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 3;
    align-self: flex-end;
  }
`;

const IconWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 6;
    align-self: flex-start;
  }
`;

const TotalWrapper = styled(Wrapper)`
  @media (max-width: 1024px) {
    grid-row: 4;
    align-self: flex-end;
  }
`;

const Icon = styled.i`
  cursor: pointer;
  color: var(--mainYellow);
  align-self: center;
`;

const Total = styled.span`
  white-space: pre;
  font-weight: 500;
`;

export const Item = ({ elem, items, setItems }) => {
  return (
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
          setItems(() => items.map((item) => removeFromCart(item, elem.id)))
        }
      >
        <Icon className="fa-solid fa-trash-can"></Icon>
      </IconWrapper>

      <TotalWrapper>
        <Total>Item Total: </Total>
        {elem.total} RUB
      </TotalWrapper>
    </>
  );
};
