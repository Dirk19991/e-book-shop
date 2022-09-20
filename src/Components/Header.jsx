import styled from 'styled-components';
import { counter } from '../functions';
import { Link } from 'react-router-dom';

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

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  gap: 0.6rem;
  padding: 1rem;
  min-width: 100px;
  height: 50px;
  background-color: var(--mainBlue);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const Number = styled.span`
  color: var(--mainYellow);
`;

export const Header = ({ items }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <i className='fa-solid fa-phone'></i>
        <StyledLink to='/'>
          <div>Products</div>
        </StyledLink>
      </Wrapper>
      <StyledLink to='cart'>
        <StyledButton>
          <i className='fa-solid fa-cart-shopping'></i>
          <div>
            My Cart <Number>({counter(items)}) </Number>
          </div>
        </StyledButton>
      </StyledLink>
    </StyledHeader>
  );
};
