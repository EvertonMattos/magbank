import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  faCreditCard,
  faMobile,
  faShoppingCart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./CreditCard.scss";
import creditCard from "../assests/credicard.png";
const CreditCard = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-5 px-5 px-lg-0">
        <Row>
          <h2 className="my-5 title-credit-card">Cartão de Crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faCreditCard}
              size={2}
              color="#f05252"
              className="h5 text-muted"
            >
              Credito Pessoal
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faMobile}
              size={2}
              color="#f05252"
              className="h5 text-muted"
            >
              APP
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faShoppingCart}
              size={2}
              color="#f05252"
              className="h5 text-muted"
            >
              Pagamentos Online
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faWallet}
              size={2}
              color="#f05252"
              className="h5 text-muted"
            >
              Carteira Virtual
            </IconText>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={creditCard} alt="MagBank Cartão de Crédito" fluid />
      </Col>
    </Row>
  </Container>
);

export default CreditCard;
