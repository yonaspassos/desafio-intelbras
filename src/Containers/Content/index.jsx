import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductGallery from "../../Components/ProductGallery";
import TwoCollumnProduct from "../../Components/TwoColumnProduct";
import { PRODUCTQUERY } from "../../queries";

const Content = (props) => {
  const { data } = useQuery(PRODUCTQUERY);
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(data?.nodeQuery?.entities[0]);
  }, [data]);
  return (
    <Container fluid>
      <ProductGallery />
      {product?.fieldProductDescription.map((banner) => (
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
      <hr className="my-5" />
    </Container>
  );
};

export default Content;
