import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import LoadingIndicator from '../../components/LoadingIndicator';
import Product from './components/Product';
import useProducts from './hooks/useProducts';

export default function ProductsList() {
  const { products, loading, error } = useProducts({});

  return loading ? (
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
  );
}
