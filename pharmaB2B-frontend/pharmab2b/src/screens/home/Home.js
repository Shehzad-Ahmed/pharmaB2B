import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import homeScreenBackground from '../../assets/homeScreenBackground6.jpg';
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
      <Col sm={5}>
        <img className="bg" src={homeScreenBackground} alt="ss"></img>
      </Col>
      <Col>
        <Login></Login>
      </Col>
    </Row>
  );
};

export default Home;
