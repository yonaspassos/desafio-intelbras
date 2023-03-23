import React from "react";
import { Container } from "react-bootstrap";
import ProductGallery from "../../Components/ProductGallery";
import TwoCollumnProduct from "../../Components/TwoColumnProduct";
const Content = (props) => {
  return (
    <Container>
      <ProductGallery />
      {props?.banners?.map((banner) => (
        <TwoCollumnProduct
          title={banner?.entity?.fieldCardMinibannerTitle}
          description={banner?.entity?.fieldCardMinibannerDesc?.processed}
          img={banner?.entity?.fieldCardMinibannerMedia?.entity?.thumbnail?.url}
          direction={banner?.entity?.fieldCardMinibannerMediaPos}
          alt={
            banner?.entity?.fieldCardMinibannerMedia?.entity?.fieldMediaImage
              ?.alt
          }
        />
      ))}
    </Container>
  );
};

export default Content;
