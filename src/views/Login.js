import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assests/createAccount.svg";
import "./Login.scss";
const Login = ({ auth }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  let history = useHistory();

  const handleSubmit = () => {
    auth.login(name, account, history.push("/dashboard"));
  };

  return (
    <section className="login">
      <div className="login__container">
        <Row>
          <Col className="text-center">
            <Image src={logo} className="mb-5" />
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label className="text-white">Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicNumber">
                <Form.Label className="text-white">Número da conta</Form.Label>
                <Form.Control
                  type="number"
                  value={account}
                  onChange={(e) => setAccount(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <Button
                className="mt-3"
                variant="success"
                type="submit"
                onClick={handleSubmit}
              >
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
