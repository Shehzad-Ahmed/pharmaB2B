import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import { Badge, Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../store/StoreProvider';

const MyNavbar = () => {
  const { state } = useContext(Store);
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="Navbar-logo" alt="logo" />
        <Link to="/" className="nav-link">
          <BSNavbar.Brand>PharmaB2B</BSNavbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/cart" className="nav-link">
            Cart
            <Badge pill bg="danger">
              {Object.keys(state.cart.items).length}
            </Badge>
          </Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
};

export default MyNavbar;
