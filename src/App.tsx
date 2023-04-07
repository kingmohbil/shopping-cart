import React from 'react';
import HomePage from './components/MainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MenProducts from './products/MenProducts';
import WomenProducts from './products/WomenProducts';
import UnisexProducts from './products/UnisexProducts';
import ProductsPage from './components/Products';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} key="home"></Route>
          <Route
            path="Products/men"
            element={<ProductsPage products={MenProducts} key="men" />}
          ></Route>
          <Route
            path="Products/women"
            element={<ProductsPage products={WomenProducts} key="women" />}
          ></Route>
          <Route
            path="Products/unisex"
            element={<ProductsPage products={UnisexProducts} key="unisex" />}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
// Added 3 directories containing the images
export default App;
