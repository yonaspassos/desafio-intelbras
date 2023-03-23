import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
const ProductGallery = (props) => {
  return (
    <Row className="py-5">
      <Col md={5}>
        <h1>{props?.title}</h1>
      </Col>
      <Col md={5}>
        {props?.media?.map((item) => (
          <Image
            fluid
            src={
              item?.entity?.fieldProdDetailsBcolorImage?.entity?.fieldMediaImage
                ?.url
            }
            alt={
              item?.entity?.fieldProdDetailsBcolorImage?.entity?.fieldMediaImage
                ?.alt
            }
          />
        ))}
      </Col>
    </Row>
  );
};

export default ProductGallery;
