import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import BTCarousel from "react-bootstrap/Carousel";
import * as S from "./styles";
import CloseIcon from "../../assets/icons/icon_close.svg";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container fluid>
        <S.CloseIcon>
          <Image src={CloseIcon} onClick={props.onClose} />
        </S.CloseIcon>
        <S.Carousel activeIndex={index} onSelect={handleSelect}>
          {props?.media?.map((item) => (
            <BTCarousel.Item className="justify-content-center">
              <S.Image
                className="d-block"
                src={item?.entity?.fieldMediaImage?.url}
                alt={item?.entity?.fieldMediaImage?.alt}
              />
            </BTCarousel.Item>
          ))}
        </S.Carousel>
        <S.ContainerThumbnail>
          {props?.media?.map((item, i) => (
            <S.ItemsThumnail selected={i === index}>
              <S.Thumbnail
                thumbnail
                selected={i === index}
                src={item.entity?.thumbnail?.url}
                alt={item?.entity?.fieldMediaImage?.alt}
              />
            </S.ItemsThumnail>
          ))}
        </S.ContainerThumbnail>
      </Container>
    </>
  );
};
export default Carousel;
