import styled from "styled-components";
import BTRow from "react-bootstrap/esm/Row";

export const Row = styled(BTRow)`
  flex-direction: ${(props) =>
    props.position === "right" ? "row-reverse" : "row"};
`;
