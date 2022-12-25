import React, { useContext, useEffect } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Store } from '../../store/StoreProvider';
import Product from './components/Product';
import useProduct from './hooks/useProduct';

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const { product, loading, error } = useProduct({}, id);

  const { state } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    //if already logged in.
    if (!state.userDetails) {
      navigate('home/');
    }
  }, [product]);

  return (
    <Container className="main-container">
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Product product={product} />
      )}
    </Container>
  );
};

export default ProductDetails;
