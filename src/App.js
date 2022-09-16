import { storeProducts } from './data';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        {storeProducts.map((elem) => (
          <Card {...elem} />
        ))}
      </Wrapper>
    </>
  );
}

export default App;
