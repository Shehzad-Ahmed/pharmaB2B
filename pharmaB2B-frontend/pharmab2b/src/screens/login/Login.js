import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../store/StoreProvider';
import { toast } from 'react-toastify';
import login from './api/login';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const navigate = useNavigate();
  const onSignInSubmitHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const response = await login(email, password);
      const userDetails = jwt_decode(response.data.access);
      contextDispatch({
        type: 'USER_LOG_IN',
        payload: { authTokens: response.data, ...userDetails },
      });
      navigate(redirect);
    } catch (error) {
      toast.error('Given Email/Password combination does not exists.');
    }
  };

  return (
    <Container className="main-container" style={{ maxWidth: '40rem' }}>
      <h1 className="my-3">Log In</h1>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" disabled={!email || !password}>
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/register?redirect=${redirect}`}>Register</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
