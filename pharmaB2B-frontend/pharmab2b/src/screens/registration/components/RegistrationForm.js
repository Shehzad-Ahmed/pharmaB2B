import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import register from '../api/register';

const RegistrationForm = (props) => {
  const { onSuccess } = props;
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [address, setAddress] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [city, setCity] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState(null);

  const onSignInSubmitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        shopName: shopName,
        address: address,
        postalCode: postalCode,
        city: city,
        licenseNumber: licenseNumber,
      });
      onSuccess();
    } catch (error) {
      toast.error('Registration unsuccesful, please check details');
    }
  };

  return (
    <Container className="main-container" style={{ maxWidth: '40rem' }}>
      <h1 className="my-3">Register</h1>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          required
        />
      </Form.Group>
      <Form onSubmit={onSignInSubmitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control
            onChange={(e) => setShopName(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Postal Address</Form.Label>
          <Form.Control
            onChange={(e) => setPostalCode(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => setCity(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>License Number</Form.Label>
          <Form.Control
            onChange={(e) => setLicenseNumber(e.target.value)}
            type="text"
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Register</Button>
        </div>
      </Form>
    </Container>
  );
};
export default RegistrationForm;
