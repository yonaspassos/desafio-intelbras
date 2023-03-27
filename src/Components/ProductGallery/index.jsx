import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Carousel from "../Carousel";
import IconGallery from "../../assets/icons/tag_gallery.svg";
import { ReactComponent as IconGalleryHover } from "../../assets/icons/icon_img_gallery_green.svg";
import { ReactComponent as IconButton } from "../../assets/icons/icon_angle_right_white.svg";
import { ReactComponent as IconButtonHover } from "../../assets/icons/icon_angle_right_green.svg";
import * as S from "./styles";

const ProductGallery = (props) => {
  const [product, setProduct] = useState();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setProduct(props?.media?.[0]?.entity);
    setColors(
      props?.media?.map(
        (p) => p?.entity?.fieldProdDetailsBcolorColor?.entity?.fieldColorRgb
      )
    );
  }, [props?.media]);

  return (
    <S.Container fluid>
      {open ? (
        <Carousel
          media={product?.fieldProdDetailsBcolGallery}
          open={open}
          onClose={() => setOpen(false)}
        />
      ) : (
        <S.Row className="my-5">
          <Col>
            <S.ContainerProduct className="p-5">
              <S.Title>
                <h4>{props?.title}</h4>
              </S.Title>
              <h2>{props?.subtitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.description }} />
              <S.Color>
                <p>Cores</p>
                {colors?.map((color, index) => (
                  <S.RadiusColor
                    fieldColor={color}
                    onClick={() => setProduct(props?.media?.[index]?.entity)}
                  />
                ))}
              </S.Color>
              <Col>
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
                  Onde comprar
                  {hover ? <IconButtonHover /> : <IconButton />}
                </S.Button>
              </Col>
            </S.ContainerProduct>
          </Col>
          <S.ImageCol>
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
              onClick={() => setOpen(true)}
            />
            <S.BackDrop>
              <S.Icon src={IconGallery} className="icon-gallery" />
              <Button onClick={() => setOpen(true)}>
                Ver galeria <IconGalleryHover />
              </Button>
            </S.BackDrop>
          </S.ImageCol>
        </S.Row>
      )}
    </S.Container>
  );
};

export default ProductGallery;
