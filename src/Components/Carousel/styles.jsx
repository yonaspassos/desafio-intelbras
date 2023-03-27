import styled from "styled-components";
import BTImage from "react-bootstrap/esm/Image";
import BTCarousel from "react-bootstrap/Carousel";
import BTRow from "react-bootstrap/Row";
import BTContainer from "react-bootstrap/Container";
import IconLeft from "../../assets/icons/icon_nav_angle_left.svg";
import IconRight from "../../assets/icons/icon_nav_angle_right.svg";

export const Image = styled(BTImage)`
  margin: auto;
  width: 60vh;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const ContainerThumbnail = styled(BTContainer)`
  justify-content: center;
  display: flex;
`;

export const ItemsThumnail = styled.div`
  display: inline-block;
  @media (max-width: 768px) {
    background-color: #eee;
    border-radius: 10px;
    width: 10px;
    height: 10px;
    align-content: center;
    padding: 0;
    margin: 0 6px;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
    ${({ selected }) =>
      selected &&
      `
        background-color: #00a335;
  `}
  }
`;

export const Thumbnail = styled(BTImage)`
  width: 70px;
  margin: 9px;
  justify-content: center;
  ${({ selected }) =>
    selected &&
    `
        border-bottom: 5px solid #00a335;
  `}
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Carousel = styled(BTCarousel)`
  & .carousel-control-prev-icon {
    background-image: url(${IconLeft});
    width: 40px;
    height: 40px;
  }
  & .carousel-control-next-icon {
    background-image: url(${IconRight});
    width: 40px;
    height: 40px;
  }
`;

export const CloseIcon = styled(BTRow)`
  justify-content: right;
  img {
    width: 16px;
    height: 16px;
    padding: 0;
  }
  img:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
