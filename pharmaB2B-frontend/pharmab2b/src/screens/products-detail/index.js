import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './components/product';
import useProduct from './hooks/useProduct';

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const product = useProduct({}, id);

  return <div>{product ? <Product product={product} /> : 'Loading'}</div>;
};

export default ProductDetails;
