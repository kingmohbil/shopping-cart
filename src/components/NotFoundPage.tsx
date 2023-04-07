import React from 'react';
import MainNav from './Navbar';
import StyledNotFound from './styles/NotFound-styled';

const NotFound: React.FC = () => {
  return (
    <>
      <MainNav />
      <StyledNotFound>
        <h1>The item your trying to found does not exist</h1>
      </StyledNotFound>
    </>
  );
};

export default NotFound;
