import React, { useState } from "react";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCreditCard,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Faq.scss";

const Faq = () => {
  const options = [
    { icon: faWallet, text: "Cartão de crédito e débito" },
    { icon: faCreditCard, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token Digital" },
    { icon: faUserTie, text: "Produto e serviços" },
  ];
  const [open, setOpen] = useState(0);
  const handClick = (key) => {
    setOpen(key);
  };
  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="justify-content-center">
          <h2 className="faq__title my-5">Duvidas frequentes</h2>
        </Row>

        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === open ? "#fff" : "#bbb"}
                    onClick={() => setOpen(key)}
                    key={key}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <p className="lead">{options[open].text}</p>
            </Row>
          </Col>
          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                color={key === open ? "#fff" : "#bbb"}
                className="mb-2"
                textClassName="lead"
                onClick={() => handClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>
          <Col>
            <Accordion defaultActiveKey={0} activeKey={`${open}`}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Nulla porttitor eros ac ex tristique posuere
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Quisque fringilla tincidunt arcu
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt arcu vel arcu fermentum, eget accumsan
                    dolor dignissim. Nam eget quam semper, varius ligula sed,
                    auctor augue. Maecenas et porta magna. Nulla mattis tortor
                    vitae metus vestibulum scelerisque. Ut mollis a nisl vel
                    suscipit. Curabitur scelerisque placerat ultrices. Proin
                    purus ante, congue vel arcu ac, porta condimentum mauris.
                    Maecenas massa orci, fringilla eget fermentum nec, dignissim
                    nec diam.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
