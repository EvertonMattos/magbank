import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assests/createAccount.svg";
import "./Login.scss";
const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center">
          <Image src={logo} className="mb-5" />
          <Form>
            <Form.Group controlId="formBasicNumber">
              <Form.Label className="text-white">Número da conta</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-white">Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Link to="/dashboard">
              <Button className="mt-3" variant="success" type="submit">
                Entrar
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
