import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 0 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainBlue);
  height: 80px;
  width: 100%;
  color: var(--mainWhite);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 0.6rem;
  width: 110px;
  height: 50px;
  background-color: var(--mainBlue);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  border-radius: 15px;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <i className='fa-solid fa-phone'></i>
        <div>Products</div>
      </Wrapper>
      <StyledButton>
        <i className='fa-solid fa-cart-shopping'></i>
        <div>My Cart</div>
      </StyledButton>
    </StyledHeader>
  );
};
