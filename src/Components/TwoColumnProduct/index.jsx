import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import * as S from "./styles";

const TwoCollumnProduct = (props) => {
  return (
    <S.Row className="p-4" position={props.direction.toLowerCase()}>
      <Col md={6}>
        <Image src={props.img} alt={props.alt} className="img-fluid" />
      </Col>
      <Col md={6} className="py-3 m-auto">
        <h3 className="fw-light">{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </Col>
    </S.Row>
  );
};

export default TwoCollumnProduct;
