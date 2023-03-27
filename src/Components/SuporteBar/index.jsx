import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import * as S from "./styles";
import Icon1 from "../../assets/icons/icon_assistencia.svg";
import Icon2 from "../../assets/icons/icon_downloads.svg";
import Icon3 from "../../assets/icons/icon_suporte.svg";

const SuporteBar = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <S.Container fluid>
      <S.Row className="p-5">
        <Col lg="3" className="my-auto">
          <h5>Você precisa de ajuda?</h5>
        </Col>
        <Col lg="1">
          <img src={Icon1} alt="Icone" />
        </Col>
        <Col lg="2">
          <p>Encontre uma Assistência Técnica</p>
        </Col>
        <Col lg="1">
          <img src={Icon2} alt="Icone" />
        </Col>
        <Col lg="2">
          <p>Downloads, configurações e video tutoriais</p>
        </Col>
        <Col lg="1">
          <img src={Icon3} alt="Icone" />
        </Col>
        <Col lg="2">
          <p>Entre em contato com a central de suporte</p>
        </Col>
      </S.Row>
      <S.ContainerCarousel className="p-4 m-auto">
        <h5>Você precisa de ajuda?</h5>
        <S.Carousel activeIndex={index} onSelect={handleSelect}>
          <S.Carousel.Item
            className="justify-content-center align-content-center p-5"
            interval={3000000}
          >
            <S.CarouselItem>
              <img src={Icon1} alt="Icone" className="px-3" />
              <p>Encontre uma Assistência Técnica</p>
            </S.CarouselItem>
          </S.Carousel.Item>
          <S.Carousel.Item className="justify-content-center p-5">
            <S.CarouselItem>
              <img src={Icon2} alt="Icone" className="px-3" />
              <p>Downloads, configurações e video tutoriais</p>
            </S.CarouselItem>
          </S.Carousel.Item>
          <S.Carousel.Item className="justify-content-center p-5">
            <S.CarouselItem>
              <img src={Icon3} alt="Icone" className="px-3" />
              <p>Entre em contato com a central de suporte</p>
            </S.CarouselItem>
          </S.Carousel.Item>
        </S.Carousel>
      </S.ContainerCarousel>
    </S.Container>
  );
};

export default SuporteBar;
