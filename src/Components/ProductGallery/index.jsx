import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
const ProductGallery = (props) => {
  return (
    <Row className="py-5">
      <Col md={6}>
        <h1>{props.entityLabel}</h1>
      </Col>
      <Col md={6}>
        <Image src={props.img} alt={props.alt} className="img-fluid" />
      </Col>
    </Row>
  );
};

export default ProductGallery;
