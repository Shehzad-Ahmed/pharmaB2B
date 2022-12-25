import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import contactUs from '../api/contactUs';

const ContactUsForm = (props) => {
  const { onSuccess } = props;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [question, setQuestion] = useState(null);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await contactUs(name, email, question, phoneNumber);
      onSuccess(true);
    } catch (error) {
      toast.error('Could not send details, please check details');
    }
  };

  return (
    <Container className="main-container">
      <Form onSubmit={onSubmitHandler}>
        <h1 className="my-3">Contact us</h1>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone-number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Question</Form.Label>
          <Form.Control
            onChange={(e) => setQuestion(e.target.value)}
            as="textarea"
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUsForm;
