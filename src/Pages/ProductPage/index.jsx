import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDisclamer from "../../Components/ProductDisclamer";
import ProductGallery from "../../Components/ProductGallery";
import ProductTaxonomy from "../../Components/ProductTaxonomy";
import SuporteBar from "../../Components/SuporteBar";
import Content from "../../Containers/Content";
import { PRODUCTQUERY } from "../../queries";

const ProductPage = () => {
  const { data } = useQuery(PRODUCTQUERY);
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(data?.nodeQuery?.entities[0]);
  }, [data]);

  return (
    <>
      <Container>
        <ProductGallery
          title={product?.title}
          subtitle={product?.fieldProductSubtitle}
          description={product?.fieldProductSummary?.value}
          cover={product?.fieldProdDetailsBcolorCover}
          media={product?.fieldProductDetailsByColor}
        />
        <Content banners={product?.fieldProductDescription} />
        <hr className="my-5" />
        <ProductDisclamer />
      </Container>
      <SuporteBar />
      <Container>
        <ProductTaxonomy taxonomies={product?.fieldProductTaxonomy} />
      </Container>
    </>
  );
};

export default ProductPage;
