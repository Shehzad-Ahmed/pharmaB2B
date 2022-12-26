import { Card, CardGroup, Container } from 'react-bootstrap';
import { LOCAL_CURRENCY_SIGN } from '../../constants';
import deliveryImage from '../../assets/aboutUsDelivery.jpg';

const AboutUs = () => {
  return (
    <Container className="main-container">
      <Card
        bg="secondary"
        border="dark"
        key="secondary"
        text="light"
        className="text-center"
        style={{ height: '12rem' }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: 'xxx-large' }}>
            Welcome to biggest b2b drugs market Place.
          </Card.Title>
          <Card.Text>
            PharmaB2B is a business that sells pharmaceutical products from
            business to business across the UK. We offer wide range of drugs
            with easier, faster delivery, and also we keep record of each item
            that we sell so expiry claims can be made easier.
          </Card.Text>
        </Card.Body>
      </Card>
      <CardGroup>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            style={{ height: '18rem' }}
            src={deliveryImage}
          />
          <Card.Body>
            <Card.Title>Free Delivery</Card.Title>
            <Card.Text>
              The delivery is free accross the UK on minimum order{' '}
              {LOCAL_CURRENCY_SIGN}500.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            style={{ height: '18rem' }}
            src="https://www.shutterstock.com/image-photo/concept-about-relationship-between-time-260nw-1117933385.jpg"
          />
          <Card.Body>
            <Card.Title>Easy Installments</Card.Title>
            <Card.Text>
              We offer upto {LOCAL_CURRENCY_SIGN}2500 credit, that you can pay
              in installments. Terms and conditions will apply.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light">
          <Card.Img
            variant="top"
            style={{ height: '18rem' }}
            src="https://www.shutterstock.com/image-photo/toy-forklift-hold-letter-block-260nw-1007787049.jpg"
          />
          <Card.Body>
            <Card.Title>Quick Expiry Claims</Card.Title>
            <Card.Text>
              We offer hassle free expiry claim process, just file a request and
              within no time get your claim processed.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default AboutUs;
