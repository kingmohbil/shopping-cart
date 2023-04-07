import React from 'react';
import StyledItem from './styles/Item-styled';
import Product from '../products/ProductInterface';
interface extendedProduct extends Product {
  delay: number;
}
const Item: React.FC<extendedProduct> = (props) => {
  return (
    <StyledItem delay={props.delay}>
      <img
        src={`${window.location.origin}/images/${props.image}`}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <p>${props.price}.00</p>
    </StyledItem>
  );
};

export default Item;
