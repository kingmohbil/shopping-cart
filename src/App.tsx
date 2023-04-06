import React from 'react';
import HomePage from './components/MainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="Products"
            element={
              <>
                <HomePage />
                <SideNav />
              </>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
