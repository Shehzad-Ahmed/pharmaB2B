import React, { useContext } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { LOCAL_CURRENCY_SIGN } from '../../constants';
import { Store } from '../../store/StoreProvider';
import useAxios from '../../utils/useAxios';
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

  const api = useAxios();
  const requstOrderHandler = async () => {
    try {
      let orderDetails = [];
      for (const key in cartItems) {
        orderDetails.push({
          product: cartItems[key].product,
          quantity: cartItems[key].quantity,
        });
      }
      const response = await api.post(
        '/api/orders-management/orders/request/',
        {
          payment_mode: 'full',
          details: orderDetails,
        }
      );
      contextDispatch({ type: 'EMPTY_CART_ITEMS' });
      toast.success(
        `Your order has been placed with id ${response.data.id}, hurray !!`
      );
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const decreaseQuantityHandler = (product) => {
    contextDispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        key: product.id,
        product: product,
        quantity: Math.max(cartItems[product.id].quantity - 1, 1),
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
  const getPriceAndGST = () => {
    let price = 0;
    let gst = 0;
    for (const key in cartItems) {
      const p = cartItems[key].product;
      price += cartItems[key].quantity * p.price;
      gst += p.gstApplicable
        ? cartItems[key].quantity * p.price * (p.gst / 100)
        : 0;
    }
    return [price, gst];
  };
  const [totalPrice, totalGST] = getPriceAndGST();

  return (
    <Container className="main-container">
      {Object.keys(cartItems).length === 0 ? (
        <Alert variant="info" style={{ opacity: 1 }}>
          Cart is empty, Go Shopping
        </Alert>
      ) : (
        <Row>
          <h1>Shopping Cart</h1>
          <Col md={8}>
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
          <Col md={4}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>
                      {LOCAL_CURRENCY_SIGN}
                      {totalPrice} + {LOCAL_CURRENCY_SIGN}
                      {Number(totalGST.toFixed(2))}
                      {' GST'}
                      <h3>Total: {Number(totalPrice + totalGST).toFixed(2)}</h3>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        variant="primary"
                        disabled={cartItems.length === 0}
                        onClick={requstOrderHandler}
                      >
                        Request Order
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ShoppingCart;
