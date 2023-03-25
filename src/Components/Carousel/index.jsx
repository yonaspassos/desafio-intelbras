import React, { useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import BTCarousel from "react-bootstrap/Carousel";
import * as S from "./styles";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <S.Modal show={props.open} fullscreen>
        <Modal.Header closeButton />
        <Modal.Body>
          <Container fluid>
            <S.Carousel activeIndex={index} onSelect={handleSelect}>
              {props?.media?.map((item) => (
                <BTCarousel.Item className="justify-content-md-center">
                  <S.Image
                    className="d-block"
                    src={item?.entity?.fieldMediaImage?.url}
                    alt={item?.entity?.fieldMediaImage?.alt}
                  />
                </BTCarousel.Item>
              ))}
            </S.Carousel>
          </Container>
          <Row className="justify-content-md-center">
            {props?.media?.map((item, i) => (
              <S.Thumbnail
                thumbnail
                selected={i === index}
                src={item.entity?.thumbnail?.url}
                alt={item?.entity?.fieldMediaImage?.alt}
              />
            ))}
          </Row>
        </Modal.Body>
      </S.Modal>
    </>
  );
};
export default Carousel;
