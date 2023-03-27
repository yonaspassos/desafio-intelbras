import styled from "styled-components";
import BTContainer from "react-bootstrap/esm/Container";
import BTRow from "react-bootstrap/esm/Row";
import BTCarousel from "react-bootstrap/Carousel";

export const Container = styled(BTContainer)`
  background-color: #00a335;
  margin: 5% auto 0;
  width: 100%;
  color: #fff;
`;

export const Row = styled(BTRow)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerCarousel = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline;
    margin: auto;
  }
`;

export const Carousel = styled(BTCarousel)`
  @media (max-width: 768px) {
    .carousel-control-next-icon {
      width: 20px;
    }
    .carousel-control-prev-icon {
      width: 20px;
      ${(props) =>
        props.activeIndex === 0 &&
        `display: none;
      `}
    }
    .carousel-indicators button {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin: 0 13px;
    }
  }
`;

export const CarouselItem = styled(BTContainer)`
  @media (max-width: 768px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
