import React from 'react';
import { Badge } from 'react-bootstrap';

const Availability = (props) => {
  const { availablePackages, quantityInCart } = props;

  const inStock = availablePackages > 0;

  return inStock ? (
    <div>
      <Badge bg="success">In Stock: {availablePackages}</Badge>{' '}
      <Badge>In Cart: {quantityInCart}</Badge>
    </div>
  ) : (
    <Badge bg="danger">Out of Stock</Badge>
  );
};

export default Availability;
