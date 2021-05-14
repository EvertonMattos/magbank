import React from "react";
import { Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import logoDesktop from "../assests/Logo_MagicPay__Desktop.png";
import logo from "../assests/Logo_MagicPay__Mobile.png";
import "./Hero.scss";

const Hero = ({ handleClick }) => (
  <Jumbotron className="text-center text-light hero">
    <Row className="my-lg-5">
      <Col lg className="text-lg-right my-lg-5">
        <Image className="d-lg-none" src={logo} />
        <Image className="d-none d-lg-inline-block" src={logoDesktop} />
      </Col>
      <Col lg className="text-lg-left my-lg-5">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light" onClick={handleClick}>
          Abra sua conta
        </Button>
      </Col>
    </Row>
  </Jumbotron>
);

export default Hero;
