import React from 'react';
import LinkType from './components/styles/shared/LinkType';
import HomePage from './components/MainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MenProducts from './products/MenProducts';
import WomenProducts from './products/WomenProducts';
import UnisexProducts from './products/UnisexProducts';
import ProductsPage from './components/Products';

const LinksInfo: LinkType[] = [
  {
    name: 'Men',
    path: '/products/men',
    active: false,
  },
  {
    name: 'Women',
    path: '/products/women',
    active: false,
  },
  {
    name: 'Unisex',
    path: '/products/unisex',
    active: false,
  },
];

const MenLinks: LinkType[] = [
  {
    name: 'Men',
    path: '/products/men',
    active: true,
  },
  ...LinksInfo.slice(1),
];

const WomenLinks: LinkType[] = [
  ...LinksInfo.slice(0, 1),
  {
    name: 'Women',
    path: 'products/women',
    active: true,
  },
  ...LinksInfo.slice(2),
];

const UnisexLinks: LinkType[] = [
  ...LinksInfo.slice(0, 2),
  {
    name: 'Unisex',
    path: 'products/unisex',
    active: true,
  },
];

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} key="home"></Route>
          <Route
            path="products/men"
            element={
              <ProductsPage products={MenProducts} Links={MenLinks} key="men" />
            }
          ></Route>
          <Route
            path="products/women"
            element={
              <ProductsPage
                products={WomenProducts}
                Links={WomenLinks}
                key="women"
              />
            }
          ></Route>
          <Route
            path="products/unisex"
            element={
              <ProductsPage
                products={UnisexProducts}
                Links={UnisexLinks}
                key="unisex"
              />
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
};
// Added 3 directories containing the images
export default App;
