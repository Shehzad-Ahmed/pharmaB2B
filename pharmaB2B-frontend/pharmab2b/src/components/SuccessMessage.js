import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SuccessMessage = (props) => {
  const { message } = props;
  return (
    <Container className="main-container">
      <Alert variant="success">{message} </Alert>
      <Link to="/">Go to homepage.</Link>
    </Container>
  );
};

export default SuccessMessage;
