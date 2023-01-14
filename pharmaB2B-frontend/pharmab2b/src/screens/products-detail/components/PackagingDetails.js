import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PackagingDetails = (props) => {
  const { type, packagingType, unitsPerPackage } = props;
  return (
    <div>
      <Row>
        <Col>{type}</Col>
        <Col>Per Box: {unitsPerPackage}</Col>
      </Row>
      <Row>
        <Col>Packaging Type: </Col>
        <Col>{packagingType}</Col>
      </Row>
    </div>
  );
};

export default PackagingDetails;
