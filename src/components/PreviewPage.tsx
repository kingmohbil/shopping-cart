import React from 'react';
import NotFound from './NotFoundPage';
import PageContainer from './styles/PreviewContainer-styled';
import ProductType from '../products/ProductInterface';
import MainNav from './Navbar';
import Preview from './ItemPreview';
import { useParams } from 'react-router-dom';

interface PropsType {
  products: ProductType[];
}

const PreviewPage: React.FC<PropsType> = (props) => {
  const products: ProductType[] = props.products;
  const { id } = useParams();
  let index: number = parseInt(id || '');

  return products[index] ? (
    <>
      <MainNav />
      <PageContainer>
        <Preview item={products[index]} />
      </PageContainer>
    </>
  ) : (
    <NotFound />
  );
};

export default PreviewPage;
