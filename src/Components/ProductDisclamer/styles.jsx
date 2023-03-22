import styled from "styled-components";
import BTButton from "react-bootstrap/esm/Button";

export const Button = styled(BTButton)`
  background-color: #00a335;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  padding: 12px;
  justify-content: space-between;
  width: 228px;

  &:hover {
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.1);
    color: #00a335;
  }
`;
