import React from "react";
import Section from "../section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function AboutSection() {
  return (
    <Section>
      <Container fluid>
        <Row>
          <Col lg={6} md={12}>
            <Image src="/images/about-us.png"></Image>
          </Col>
          <Col lg={6} md={12}></Col>
        </Row>
      </Container>
    </Section>
  );
}
