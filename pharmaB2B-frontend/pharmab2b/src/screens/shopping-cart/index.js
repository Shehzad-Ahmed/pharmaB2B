import React, { useContext } from 'react';
import { Alert, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Store } from '../../store/StoreProvider';
import CartItem from './components/CartItem';

const ShoppingCart = () => {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const cartItems = state.cart.items;
  const increaseQuantityHandler = (product) => {
    contextDispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        key: product.id,
        product: product,
        quantity: Math.min(
          cartItems[product.id].quantity + 1,
          product.availablePackages
        ),
      },
    });
  };

  const decreaseQuantityHandler = (product) => {
    contextDispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        key: product.id,
        product: product,
        quantity: Math.max(cartItems[product.id].quantity - 1, 0),
      },
    });
  };

  const removeProductHandler = (product) => {
    contextDispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: {
        key: product.id,
      },
    });
  };
  return Object.keys(cartItems).length === 0 ? (
    <Alert variant="info">Cart is empty, Go Shopping</Alert>
  ) : (
    <Row>
      <Col>
        <ListGroup>
          {Object.keys(cartItems).map((key) => {
            const item = cartItems[key];
            return (
              <CartItem
                key={key}
                product={item.product}
                quantity={item.quantity}
                increaseQuantityHandler={increaseQuantityHandler}
                decreaseQuantityHandler={decreaseQuantityHandler}
                removeProductHandler={removeProductHandler}
              ></CartItem>
            );
          })}
        </ListGroup>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Price</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ShoppingCart;
