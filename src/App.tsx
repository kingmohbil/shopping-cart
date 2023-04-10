import React from 'react';
import HomePage from './components/MainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MenProducts from './products/MenProducts';
import WomenProducts from './products/WomenProducts';
import UnisexProducts from './products/UnisexProducts';
import ProductsPage from './components/Products';
import PreviewPage from './components/PreviewPage';
import NotFoundPage from './components/NotFoundPage';
import { MenLinks, WomenLinks, UnisexLinks } from './links';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} key="home"></Route>
            <Route
              path="products/men"
              element={
                <ProductsPage
                  products={MenProducts}
                  Links={MenLinks}
                  key="men"
                />
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
            <Route
              path="products/men/:id"
              element={<PreviewPage products={MenProducts} />}
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Provider>
      </HashRouter>
    </>
  );
};

export default App;
