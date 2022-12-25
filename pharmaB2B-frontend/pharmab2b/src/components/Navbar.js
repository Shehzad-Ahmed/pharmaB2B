import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import {
  Badge,
  Container,
  Nav,
  Navbar as BSNavbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../store/StoreProvider';

const MyNavbar = () => {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const userDetails = state.userDetails;

  const signoutHandler = () => {
    contextDispatch({ type: 'USER_LOG_OUT' });
  };

  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="Navbar-logo" alt="logo" />
        <Link to="/" className="nav-link">
          <BSNavbar.Brand>PharmaB2B</BSNavbar.Brand>
        </Link>
        {userDetails ? (
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              <Badge pill bg="danger">
                {Object.keys(state.cart.items).length}
              </Badge>
            </Link>
            <Link to="/faqs" className="nav-link">
              FAQs
            </Link>
            <Link to="/contact-us" className="nav-link">
              Help
            </Link>
            <NavDropdown title={userDetails.first_name} id="basic-nav-dropdown">
              <Link to="/orderhistory">
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="/home"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/faqs" className="nav-link">
              FAQs
            </Link>
            <Link to="/contact-us" className="nav-link">
              Help
            </Link>
          </Nav>
        )}
      </Container>
    </BSNavbar>
  );
};

export default MyNavbar;
