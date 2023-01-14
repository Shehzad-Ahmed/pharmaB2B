import React, { useContext } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { LOCAL_CURRENCY_SIGN as LCR } from '../../../constants';
import { Store } from '../../../store/StoreProvider';
import Availability from '../../../components/Availability';
import GSTPrice from './GSTPrice';
import PackagingDetails from './PackagingDetails';

const Product = (props) => {
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
        quantity: Math.min(getQuantityInCart() + 1, product.availablePackages),
      },
    });
  };

  return (
    <div>
      <Row>
        <Col md={6}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-large"
            style={{ maxWidth: '40vw', maxHeight: '60vh' }}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <PackagingDetails
                type={product.type}
                packagingType={product.packagingType}
                unitsPerPackage={product.unitsPerPackage}
              />{' '}
            </ListGroup.Item>
            <ListGroup.Item>
              Price: {LCR}
              {product.price}
            </ListGroup.Item>
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
                    basePrice={product.price}
                    gstPercent={product.gst}
                    gstApplicable={product.gstApplicable}
                  ></GSTPrice>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      <Availability
                        availablePackages={product.availablePackages}
                        quantityInCart={getQuantityInCart()}
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button onClick={addProductToCart} variant="primary">
                      Add to Cart
                    </Button>
                  </div>
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
