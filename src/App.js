import { Homepage } from './Pages/Homepage';
import { Header } from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { storeProducts } from './data';
import { Cart } from './Pages/Cart';

function App() {
  const state = localStorage.getItem('state')
    ? JSON.parse(localStorage.getItem('state'))
    : storeProducts;

  const [items, setItems] = useState(state);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Header items={items} />
      <Routes>
        <Route
          path='/'
          element={<Homepage items={items} setItems={setItems} />}></Route>
        <Route
          path='cart'
          element={<Cart items={items} setItems={setItems} />}></Route>
      </Routes>
    </>
  );
}

export default App;
