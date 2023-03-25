import styled from "styled-components";
import BTImage from "react-bootstrap/esm/Image";
import BTModal from "react-bootstrap/esm/Modal";
import BTCarousel from "react-bootstrap/Carousel";
import IconLeft from "../../assets/icons/icon_nav_angle_left.svg";
import IconRight from "../../assets/icons/icon_nav_angle_right.svg";

export const Modal = styled(BTModal)`
  .modal-header {
    border-bottom: none;
  }
`;

export const Image = styled(BTImage)`
  margin: auto;
  width: 70vh;
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
