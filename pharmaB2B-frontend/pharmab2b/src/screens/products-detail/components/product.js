import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import GSTPrice from './gstPrice';

const Product = (props) => {
  const { product } = props;

  return (
    <div>
      <Row>
        <Col md={6}>
          <img
            src={product.image_url}
            alt={product.name}
            className="img-large"
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>Packaging Info</ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Product Description</ListGroup.Item>
            <ListGroup.Item>Manufacturer and Description</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flust">
                <ListGroup.Item>
                  <GSTPrice
                    basePrice={22}
                    gstPercent={10}
                    gstApplicable={true}
                  ></GSTPrice>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
