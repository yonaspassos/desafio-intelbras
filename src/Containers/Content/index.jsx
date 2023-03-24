import React from "react";
import { Container } from "react-bootstrap";
import MiniBanner from "../../Components/MiniBanner";
const Content = (props) => {
  return (
    <Container>
      {props?.banners?.map((banner, index) => (
        <MiniBanner
          key={index}
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
