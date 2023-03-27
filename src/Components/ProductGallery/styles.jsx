import styled from "styled-components";
import BTContainer from "react-bootstrap/esm/Container";
import BTCol from "react-bootstrap/esm/Col";
import BTImage from "react-bootstrap/esm/Image";
import BTRow from "react-bootstrap/esm/Row";
import BTButton from "react-bootstrap/esm/Button";

export const Container = styled(BTContainer)`
  height: 100%;
  @media (max-width: 768px) {
    display: block;
    flex: 1;
  }
`;

export const Row = styled(BTRow)`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContainerProduct = styled(BTContainer)`
  flex: 1;
  background-color: #424242;
  border-radius: 15px 0 0 15px;
  height: 100%;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    display: block;
    flex: auto;
    border-radius: 0 0 15px 15px;
  }
`;

export const Title = styled.div`
  h4 {
    position: relative;
    padding-bottom: 10px;
  }
  h4:after {
    content: " ";
    width: 20%;
    height: 1px;
    position: absolute;
    background-color: #00a335;
    left: 0;
    bottom: 0;
  }
`;

export const Color = styled.div`
  display: inline-flex;
  align-items: initial;
`;

export const RadiusColor = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.fieldColor};
  margin: 0 13px;
  padding: 5px;
  cursor: pointer;
  &:before {
    position: absolute;
    border: 1px solid ${(props) => props.fieldColor};
    display: block;
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    left: -8px;
    top: -8px;
  }
`;

export const Button = styled(BTButton)`
  background-color: #00a335;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  padding: 12px;
  justify-content: space-between;
  width: 200px;
  margin-top: 67px;
  &:hover {
    opacity: 0.8;
    background-color: #fff;
    color: #00a335;
  }
`;

export const Image = styled(BTImage)`
  position: relative;
  border-radius: 0 15px 15px 0;
  height: 100%;
  @media (max-width: 768px) {
    width: 96%;
    border-radius: 15px 15px 0 15px;
  }
`;

export const Icon = styled(BTImage)`
  position: absolute;
  top: 50px;
  right: 0;
`;

export const ImageCol = styled(BTCol)`
  margin-left: calc(5% - 90px);
  position: relative;
  @media (max-width: 768px) {
    display: block;
    flex: auto;
    margin: 0 auto;
  }
`;

export const BackDrop = styled.div`
  transition: all 0.5s ease-out 0s;
  border-radius: 0 15px 15px 0;
  &:not(button) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    @media (max-width: 768px) {
      width: 96%;
    }
  }
  :hover {
    transition: all 0.5s ease-in 0s;
    background-color: rgba(62, 80, 85, 0.6);
    cursor: pointer;
    button {
      display: block;
      background: #fff;
      color: #00a335;
      font-weight: bold;
      border: 1px solid #00a335;
    }
    .icon-gallery {
      display: none;
    }
  }
  button {
    display: none;
    height: 46px;
    background: #fff;
    border: 1px solid #00a335;
    border-radius: 50px;
    padding: 10px 40px;
    color: #00a335;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    border-radius: 15px 15px 0 0;
  }
`;
