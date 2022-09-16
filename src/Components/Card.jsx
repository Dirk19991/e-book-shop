import styled from 'styled-components';

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

  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
`;

export const Card = ({ id, title, img, price, items, setItems }) => {
  return (
    <StyledCard>
      <Wrapper>
        <Img src={img} alt={title}></Img>
      </Wrapper>

      <Icon
        onClick={() => {
          setItems(
            items.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  count: item.count + 1,
                };
              }
              return item;
            })
          );
        }}
        className='fa-solid fa-2x fa-cart-plus'></Icon>

      <Text>
        <div>{title}</div>
        <div>{price} руб.</div>
      </Text>
    </StyledCard>
  );
};
