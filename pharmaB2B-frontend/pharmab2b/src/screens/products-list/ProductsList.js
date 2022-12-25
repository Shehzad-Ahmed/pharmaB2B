import React, { useContext, useEffect } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Store } from '../../store/StoreProvider';
import Product from './components/Product';
import useProducts from './hooks/useProducts';

export default function ProductsList() {
  const { products, loading, error } = useProducts({});
  const { state } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    //if already logged in.
    if (!state.userDetails) {
      navigate('home/');
    }
  }, []);

  return (
    <Container className="main-container">
      {loading ? (
        <LoadingIndicator className="align-content-center" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div>
          <h1>Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}
