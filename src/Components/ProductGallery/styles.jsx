import styled from "styled-components";
import BTContainer from "react-bootstrap/esm/Container";
import BTImage from "react-bootstrap/esm/Image";

export const Container = styled(BTContainer)`
  height: 100%;
`;

export const ContainerProduct = styled(BTContainer)`
  flex: 1;
  background-color: #424242;
  border-radius: 15px 0 0 15px;
  height: 100%;
  color: #fff;
`;

export const Image = styled(BTImage)`
  position: relative;
  border-radius: 0 15px 15px 0;
  margin-left: calc(5% - 66px);
  & .imageClick {
    background-color: rgba(62, 80, 85, 0.6);
    opacity: 0.5;
  }
`;

export const Icon = styled(BTImage)`
  position: absolute;
  margin-top: 50px;
  left: calc(95% - 135px);
  &:hover {
    background-color: rgba(62, 80, 85, 0.6);
    opacity: 0.5;
    cursor: pointer;
  }
`;
