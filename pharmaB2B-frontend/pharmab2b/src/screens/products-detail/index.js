import React from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';
import Product from './components/Product';
import useProduct from './hooks/useProduct';

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const { product, loading, error } = useProduct({}, id);
  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Product product={product} />
      )}
    </div>
  );
};

export default ProductDetails;
