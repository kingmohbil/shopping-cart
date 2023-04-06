import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from './styles/SideNav-styled';

const SideNav: React.FC = () => {
  return (
    <SideNavContainer>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/unisex">UniSex</Link>
    </SideNavContainer>
  );
};

export default SideNav;
