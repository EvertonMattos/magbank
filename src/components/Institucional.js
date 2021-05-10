import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import IconText from "./IconText";
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Institucional.scss";

const Institucional = () => (
  <section className="institucional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institucional__title my-5">Já nascemos digital</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
            porta magna. Nulla mattis totor vitae metus vestibulum scelerisque.
            Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
            ultrices. Proin purus ante, congue vel arcu ac, porta condimentum
            mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim
            nec diam.
          </p>
          <IconText icon={faMobileAlt} size={2} color="#fff" className="mt-3">
            Sem fila é sem burocracia
          </IconText>
          <IconText icon={faMobile} size={2} color="#fff" className="mt-3">
            Simples é pratico
          </IconText>
          <IconText icon={faGlobe} size={2} color="#fff" className="mt-3">
            Abertura de conta 100% online
          </IconText>
          <IconText icon={faShieldAlt} size={2} color="#fff" className="mt-3">
            Transição mais segura
          </IconText>
          <Button
            variant="outline-light"
            className="d-flex align-content-sm-center mt-5"
          >
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institucional;
