import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import * as S from "./styles";
import Icon1 from "../../assets/icons/icon_assistencia.svg";
import Icon2 from "../../assets/icons/icon_downloads.svg";
import Icon3 from "../../assets/icons/icon_suporte.svg";

const SuporteBar = (props) => {
  return (
    <S.Container fluid>
      <Row className="p-5">
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
      </Row>
    </S.Container>
  );
};

export default SuporteBar;
