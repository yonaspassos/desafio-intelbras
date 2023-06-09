import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import * as S from "./styles";
import Icon from "../../assets/icons/icon-tecnico.svg";
import { ReactComponent as IconButton } from "../../assets/icons/icon_angle_right_white.svg";
import { ReactComponent as IconButtonHover } from "../../assets/icons/icon_angle_right_green.svg";
import { Container } from "react-bootstrap";

const ProductDisclamer = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="2" lg="1">
          <img src={Icon} alt="Icone" />
        </Col>
        <Col xs="6" lg="5">
          <p>
            Este produto deve ser configurado por um{" "}
            <strong>técnico qualificado</strong>.
          </p>
        </Col>
        <Col xs="auto" lg="auto">
          <S.Button
            href="#"
            variant="link"
            onMouseOver={(e) => {
              e.preventDefault();
              setHover(true);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHover(false);
            }}
          >
            Encontre um instalador
            {hover ? <IconButtonHover /> : <IconButton />}
          </S.Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisclamer;
