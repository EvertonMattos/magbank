import React from "react";

import { Container, Row, Button } from "react-bootstrap";

const CenterButton = ({ children, handleCreateAcc }) => (
  <Container>
    <Row className="d-flex justify-content-center">
      <Button
        variant="danger"
        className="my-5 px-5 py-2"
        size="lg"
        onClick={handleCreateAcc}
      >
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenterButton;
