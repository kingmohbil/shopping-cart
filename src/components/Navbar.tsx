import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavContainer from './styles/Nav-styled';

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <h1>
        <Link className="header-link" to="/">
          1 % PERFUMES
        </Link>
      </h1>
      <div className="links">
        <Link to="/products/men">Products</Link>
        <Link className="cart-link" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span>0</span>
        </Link>
      </div>
    </NavContainer>
  );
};
export default Nav;
