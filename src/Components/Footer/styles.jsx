import styled from "styled-components";
import ImageFooterMobile from "../../assets/images/Footer-mobile.png";
import ImageFooter from "../../assets/images/Footer.png";

export const Footer = styled.div`
  background-image: url(${ImageFooter});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 50vw;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    background-image: url(${ImageFooterMobile});
    background-repeat: no-repeat;
    background-position-x: center;
    width: 100%;
    height: 100vw;
    background-size: contain;
  }
`;
