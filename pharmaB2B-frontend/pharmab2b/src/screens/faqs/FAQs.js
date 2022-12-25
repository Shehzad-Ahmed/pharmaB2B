import React from 'react';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';
import SearchBar from '../../components/SearchBar';
import useFAQs from './hooks/useFAQs';

const FAQs = () => {
  const { search } = useLocation();
  console.log(search);
  const sp = new URLSearchParams(search);
  const query = sp.get('q');

  const { loading, error, FAQsData } = useFAQs([], query);
  return loading ? (
    <LoadingIndicator />
  ) : error ? (
    <Alert variant="danger">{error}</Alert>
  ) : (
    <Container className="main-container">
      <Row style={{ width: '50vw', marginBottom: '1rem' }}>
        <SearchBar
          placeholder={query ? query : 'Question'}
          ariaLabel="Search FAQs"
          currentPath="faqs"
        ></SearchBar>
      </Row>
      {FAQsData.map((faq) => (
        <Row>
          <Col>
            <Card
              bg="secondary"
              key="Secondary"
              text="white"
              style={{ width: '80vw' }}
              className="mb-3"
            >
              <Card.Header>Question: {faq.order}</Card.Header>
              <Card.Body>
                <Card.Title>{faq.question}</Card.Title>
                <Card.Text>{faq.answer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FAQs;
