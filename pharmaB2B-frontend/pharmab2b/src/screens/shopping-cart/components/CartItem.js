import React from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { LOCAL_CURRENCY_SIGN } from '../../../constants';

const CartItem = (props) => {
  const {
    product,
    quantity,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    removeProductHandler,
  } = props;

  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col md={4}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="cart-img-thumbnail rounded"
          ></img>
          <Link to={`product/${product.id}`}>{product.name}</Link>
        </Col>
        <Col md={3}>
          <Button
            onClick={() => {
              decreaseQuantityHandler(product);
            }}
            variant="light"
          >
            <i className="fa fa-minus-circle"></i>
          </Button>
          <span>{quantity}</span>
          <Button
            onClick={() => {
              increaseQuantityHandler(product);
            }}
            variant="light"
          >
            <i className="fa fa-plus-circle"></i>
          </Button>
          {'   '}
          <Badge>In Stock: {product.availablePackages}</Badge>
        </Col>
        <Col md={3}>
          {LOCAL_CURRENCY_SIGN}
          {product.price}
        </Col>
        <Col md={2}>
          <Button
            onClick={() => {
              removeProductHandler(product);
            }}
            variant="light"
          >
            <i className="fa fa-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
