import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./DashBoard.scss";
const DashBoard = () => (
  <Container className="dasboard py-5">
    <Row>
      <Col xs={12} lg={4}>
        <Row className="d-flex text-align-center mb-5">
          <Col xs={3}>
            <span className="dasboard__user-avatar">
              <FontAwesomeIcon icon={faUserCircle} size="4x" color="#f8f9fb" />
              <FontAwesomeIcon
                icon={faUser}
                className="dasboard__user-icon"
                size="3x"
                color="#f1f2f4"
              />
            </span>
          </Col>
          <Col xs={9}>
            <h4>Everton Mattos</h4>
            <p className="text-muted">ag:123456 c/c: 452-1</p>
          </Col>
        </Row>
        <Button
          className="dasboard__button text-left"
          variant="link"
          size="lg"
          block
        >
          Minha conta
        </Button>
        <Button
          className="dasboard__button text-left"
          variant="link"
          size="lg"
          block
        >
          Pagamento
        </Button>
        <Button
          className="dasboard__button text-left"
          variant="link"
          size="lg"
          block
        >
          Extrato
        </Button>
      </Col>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-5">
        <h3 className="my-5 text-muted">Conta corrente</h3>
        <h6>
          <small>
            <strong>Saldo em conta corrent</strong>
          </small>
        </h6>
        <h4 className="text-success mb-lg-3">
          <small>R$:</small>3.500<small>,00</small>
        </h4>
        <h6>
          <smal>
            <strong>Cheque especial </strong>
          </smal>
        </h6>
        <p className="mb-0">Limite Disponivel</p>
        <p className="mb-4">R$:5.000,00</p>
        <Button className="btn-secondary">Ver Extrato</Button>
      </Col>
      <Col xs={12} lg={5}></Col>
    </Row>
  </Container>
);

export default DashBoard;
