import React from 'react';
import MainNav from './Navbar';
import SideNav from './SideNav';
import ItemsContainer from './styles/ItemsContainer-styled';
import LinkType from './styles/shared/LinkType';
import Item from './Item';
import Product from '../products/ProductInterface';

interface propsType {
  products: Product[];
  Links: LinkType[];
}

const ProductsPage: React.FC<propsType> = ({ products, Links }) => {
  return (
    <>
      <MainNav />
      <SideNav Links={Links} />
      <ItemsContainer>
        {products.map((product, index) => (
          <Item
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            delay={(index + 1) * 100}
          />
        ))}
      </ItemsContainer>
    </>
  );
};

export default ProductsPage;
