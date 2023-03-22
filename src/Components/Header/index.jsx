import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props) => {
  return (
    <header>
      <div className="acessive-header">
        <div className="d-flex justify-content-end">
          <span className="p-2">Sobre acessibilidade</span>
          <span className="p-2">Contraste</span>
          <span className="p-2">Investidores</span>
          <span className="p-2">Blog parceiros</span>
          <span className="p-2">Treinamentos</span>
        </div>
      </div>
      <div className="header-content">
        <Row className="d-flex ">
          {/* <NavLink to="/" className="logo" title="Ir para a página principal">
              Logo
            </NavLink> */}
          <h1>Logo</h1>
        </Row>
        <Navbar expand="md">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown
                  title="Produtos e serviços"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    Produtos e serviços
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Destaques" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Destaques</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Onde encontrar"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    Onde encontrar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Suporte" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Suporte</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Contato" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Contato</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sobre Nós" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Sobre Nós</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1">Loja Intelbras</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Faça sua busca"
                  className="me-2"
                  aria-label="Faça sua busca"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
