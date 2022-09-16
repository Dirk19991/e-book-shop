import { storeProducts } from './data';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem;
`;

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(storeProducts);
  }, []);

  return (
    <>
      <Header items={items} />

      <Wrapper>
        {storeProducts.map((elem) => (
          <Card items={items} setItems={setItems} {...elem} />
        ))}
      </Wrapper>
    </>
  );
}

export default App;
