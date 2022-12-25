import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import homeScreenBackground from '../../assets/homeScreenBackground2.jpg';
import { Store } from '../../store/StoreProvider';
import Login from '../login/Login';

const Home = () => {
  const { state } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    //if already logged in.
    if (state.userDetails) {
      navigate('/');
    }
  }, []);

  return (
    <Row>
      <Col>
        <img className="bg" src={homeScreenBackground} alt="ss"></img>
      </Col>
      <Col>
        <Row>
          <h1>Welcome to Pharma B2B market place</h1>
        </Row>
        <Row>
          <Login></Login>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
