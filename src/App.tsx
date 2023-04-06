import React from 'react';
import HomePage from './components/MainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './components/Products';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Products" element={<ProductsPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
// configuration
export default App;
