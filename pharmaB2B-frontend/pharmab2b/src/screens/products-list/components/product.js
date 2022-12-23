import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOCAL_CURRENCY_SIGN as LCR } from '../../../constants';
export default function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image_url}
          className="card-img-top"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>
          {LCR}
          {product.price}
        </Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
