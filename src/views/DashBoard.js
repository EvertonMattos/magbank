import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";
import "./DashBoard.scss";
const DashBoard = ({ name, account }) => {
  const [active, setActive] = useState(0);
  const link = [
    { text: "Minha conta", path: "/dashboard", exact: true },
    { text: "Pagamentos", path: "/dashboard/paymants" },
    { text: "Extrato", path: "/dashboard/history" },
  ];
  const data = {
    lastePay: [
      {
        date: "27/10",
        description: "AMAZONPRIME 12348",
        value: "38,70",
      },
      {
        date: "04/10",
        description: "RONALDINHOST 2312332",
        value: "4,70",
      },
      {
        date: "17/10",
        description: "ESTACIONAMENTO 123234",
        value: "450,80",
      },
      {
        date: "21/10",
        description: "NETFLIX  123234",
        value: "300,80",
      },
    ],
    futurePay: [
      {
        date: "27/10",
        description: "SAQUE 24H 012345",
        value: "38,70",
      },
      {
        date: "04/10",
        description: "SUPERMERCADO 2312332",
        value: "4,70",
      },
      {
        date: "17/10",
        description: "ESTACIONAMENTO 123234",
        value: "450,80",
      },
      {
        date: "21/10",
        description: "NETFLIX  123234",
        value: "300,80",
      },
    ],
    historyPay: [
      {
        date: "07/09",
        description: "Saque 24 012345",
        value: "-200,00",
        saldo: "",
      },
      {
        date: "17/09",
        description: "Saldo do dia",
        value: "",
        saldo: "2.780,00",
      },
      {
        date: "22/09",
        description: "Estacionamento do zé",
        value: "-12,00",
        saldo: "",
      },
      {
        date: "28/09",
        description: "Comprar Internet",
        value: "-450,00",
        saldo: "",
      },
      {
        date: "30/09",
        description: "Saldo do dia",
        value: "",
        saldo: "1.878,00",
      },
    ],
  };

  return (
    <Container className="dasboard py-5">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="d-flex text-align-center mb-5">
            <Col xs={3}>
              <span className="dasboard__user-avatar">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="4x"
                  color="#f8f9fb"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="dasboard__user-icon"
                  size="3x"
                  color="#f1f2f4"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>{name}</h4>
              <p className="text-muted">{account}</p>
            </Col>
          </Row>
          {link.map(({ text, path, exact }, key) => (
            <Link
              className="dasboard__link"
              to={path}
              exact={exact ? exact : false}
              key={key}
            >
              <Button
                className={`dasboard__button ${
                  key === setActive ? "dasboard__button--active" : ""
                } text-left`}
                variant="link"
                size="lg"
                block
                OnClick={() => setActive(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>
        <Switch>
          <Route path="/dashboard/history">
            <AccountHistory data={data} />
          </Route>
          <Route path="/dashboard/paymants">
            <AccountPayments data={data} />
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default DashBoard;
