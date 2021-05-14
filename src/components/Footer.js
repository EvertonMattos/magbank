import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assests/MAGbank .png";
import appleImage from "../assests/playstore.png";
import playstore from "../assests/aple.png";
import "./Footer.scss";
const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="py-5 text-center">
        <Col xs={12} lg={6} className="text-lg-left mb-3">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4}>
          <Image src={appleImage} />
          <Image src={playstore} className="ml-3" />
        </Col>
        <Col xs={12} lg={2} className="align-items-center">
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="#7c7c7c" />
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            color="#7c7c7c"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            size="3x"
            color="#7c7c7c"
            className="ml-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
