import styled from "styled-components";
import BTContainer from "react-bootstrap/esm/Container";

export const Container = styled(BTContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
