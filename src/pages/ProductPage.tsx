import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/product/ProductDetail';
import { DataPageContainer } from './DataPage';

const ProductPage = () => {
  return (
    <DataPageContainer>
      <Navbar hasArrow />
      <ProductDetail />
    </DataPageContainer>
  );
};

export default ProductPage;
