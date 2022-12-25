import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegistrationMessage = () => {
  return (
    <Container className="main-container">
      <Alert variant="success">
        The registration request has successfully been received. Upon
        verification of your details, you will receive the response on
        registered email.{' '}
      </Alert>
      <Link to="/">Go to homepage.</Link>
    </Container>
  );
};

export default RegistrationMessage;
