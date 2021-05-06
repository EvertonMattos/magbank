import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./Institucional.scss";

const Institucional = () => (
  <Container className="institucional-img">
    <Row>
      <Col xs={12} lg={5} />
      <Col xs={12} lg={7}>
        <h2 className="my-5">Já nascemos digital</h2>
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam
          eget quam semper, varius ligula sed, auctor augue. Maecenas et porta
          magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut
          mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices.
          Proin purus ante, congue vel arcu ac, porta condimentum mauris.
          Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
        </p>
        <Button variant="outline-secondary">Abra sua conta</Button>
      </Col>
    </Row>
  </Container>
);

export default Institucional;
