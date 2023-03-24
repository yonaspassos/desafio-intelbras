import React from "react";
import { Container, Modal } from "react-bootstrap";
import IconGalleryHover from "../../assets/icons/icon_img_gallery_green.svg";
import * as S from "./styles";

const Carousel = (props) => {
  console.log(props);
  return (
    <>
      <Modal show={props.open}>
        <Modal.Header closeButton />
        <Modal.Body>
          {props?.media?.map((item) => (
            <Container>
              <S.Image
                fluid
                src={item?.entity?.fieldMediaImage?.url}
                alt={item?.entity?.fieldMediaImage?.alt}
              />
              <S.Icon src={IconGalleryHover} />
            </Container>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Carousel;
