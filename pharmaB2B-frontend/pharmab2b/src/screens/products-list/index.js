import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from './components/product';
import useProducts from './hooks/useProducts';

export default function ProductsList() {
  const products = useProducts([]);
  return (
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
