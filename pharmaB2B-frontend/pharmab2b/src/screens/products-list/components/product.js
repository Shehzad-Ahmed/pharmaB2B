import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Availability from '../../../components/Availability';
import { LOCAL_CURRENCY_SIGN as LCR } from '../../../constants';
import { Store } from '../../../store/StoreProvider';
export default function Product(props) {
  const { product } = props;
  const { state, dispatch: contextReducer } = useContext(Store);

  const getQuantityInCart = () => {
    let quantity = 0;
    const key = product.id;
    if (key in state.cart.items) {
      quantity = state.cart.items[key].quantity;
    }
    return quantity;
  };

  const addProductToCart = () => {
    contextReducer({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        key: product.id,
        product: product,
        quantity: Math.min(getQuantityInCart() + 1, product.available_packages),
      },
    });
  };

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
        <Link to={`/product/${product.id}`} className="nav-link">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>
          {product.type} Price: {LCR}
          {product.price}
          <Availability
            availablePackages={product.available_packages}
            quantityInCart={getQuantityInCart()}
          ></Availability>
        </Card.Text>
        <Button onClick={addProductToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
