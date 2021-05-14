import React from "react";
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  NavDropdown,
  Button,
} from "react-bootstrap";
import "./Navbar.scss";
import logo from "/Users/windo/developer/magbank/src/assests/MAGbank.svg";
const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="MAGbank"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#link">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar Minha Conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cria Conta Juridica
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cria Conta Fisisca
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleCreateAcc}>
            Abra sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
