import styled from "styled-components";
import BTBreadcrumb from "react-bootstrap/Breadcrumb";

export const Breadcrumb = styled(BTBreadcrumb)`
  & a {
    color: #2b2b2b;
    text-decoration: none;
  }
  & a:hover {
    color: #00a335;
    font-weight: bold;
  }
  & a:active {
    font-weight: bold;
  }
`;
