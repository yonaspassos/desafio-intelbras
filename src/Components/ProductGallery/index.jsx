import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import IconGallery from "../../assets/icons/tag_gallery.svg";
import Carousel from "../Carousel";
import * as S from "./styles";

const ProductGallery = (props) => {
  const [product, setProduct] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setProduct(props?.media?.[0]?.entity);
  }, [props?.media]);

  return (
    <S.Container fluid>
      <Row className="my-5">
        <Col>
          <S.ContainerProduct className="p-5">
            <h4>{props?.title}</h4>
            <h2>{props?.subtitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          </S.ContainerProduct>
        </Col>
        <Col>
          <Container>
            <S.Image
              fluid
              src={
                product?.fieldProdDetailsBcolorCover?.entity?.fieldMediaImage
                  ?.url
              }
              alt={
                product?.fieldProdDetailsBcolorCover?.entity?.fieldMediaImage
                  ?.alt
              }
            />
            <S.Icon src={IconGallery} onClick={() => setOpen(true)} />
            <Carousel
              media={product?.fieldProdDetailsBcolGallery}
              open={open}
            />
          </Container>
        </Col>
      </Row>
    </S.Container>
  );
};

export default ProductGallery;
