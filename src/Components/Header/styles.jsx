import styled from "styled-components";
import ImageHeaderMobile from "../../assets/images/header-mobile.png";
import ImageHeader from "../../assets/images/header.png";

export const Header = styled.div`
  background-image: url(${ImageHeader});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 10vw;
  @media (max-width: 768px) {
    background-image: url(${ImageHeaderMobile});
    background-repeat: no-repeat;
    width: 100%;
    height: 10vw;
    background-size: cover;
  }
`;
