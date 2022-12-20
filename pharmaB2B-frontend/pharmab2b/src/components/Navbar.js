import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import { Container, Navbar as BSNavbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="Navbar-logo" alt="logo" />
        <BSNavbar.Brand>PharmaB2B</BSNavbar.Brand>
      </Container>
    </BSNavbar>
  );
};

export default MyNavbar;
