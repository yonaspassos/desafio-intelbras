import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import * as S from "./styles";

const ProductTaxonomy = (props) => {
  return (
    <Container className="py-4">
      <S.Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Produtos</Breadcrumb.Item>
        {props?.taxonomies?.map((item) => (
          <Breadcrumb.Item href={item?.entity?.entityUrl?.path}>
            {item?.entity?.entityLabel}
          </Breadcrumb.Item>
        ))}
      </S.Breadcrumb>
    </Container>
  );
};

export default ProductTaxonomy;
