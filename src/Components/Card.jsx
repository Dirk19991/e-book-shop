import styled from 'styled-components';

const StyledCard = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Img = styled.img`
  max-width: 100%;
  height: 300px;
  display: block;
`;

const Text = styled.div`
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = ({ id, title, img, price }) => {
  return (
    <StyledCard>
      <Img src={img} alt={title}></Img>
      <Text>
        <div>{title}</div>
        <div>{price}</div>
      </Text>
    </StyledCard>
  );
};
