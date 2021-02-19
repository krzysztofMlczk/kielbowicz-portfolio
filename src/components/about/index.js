import React from "react";
import Section from "../section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Btn from "../button";
import "../../styles/global.css";
import "./styles.css";

export default function AboutSection({
  imgFirst,
  img,
  alt,
  title,
  paragraphs,
  button,
}) {
  const imgOrder = imgFirst ? "first" : "last";
  return (
    <Section padding="8rem 5rem">
      <Container fluid>
        <Row>
          <Col lg={{ span: 6, order: imgOrder }} md={12}>
            <Image src={img} alt={alt} fluid />
          </Col>
          <Col lg={6} md={12}>
            <AboutSection.Title>{title}</AboutSection.Title>
            <AboutSection.TextWrap>
              {paragraphs.map((p) => (
                <AboutSection.Paragraph key={title + p.id}>
                  {p.content}
                </AboutSection.Paragraph>
              ))}
            </AboutSection.TextWrap>
            <Btn type={button.buttonType}>{button.innerText}</Btn>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

AboutSection.Title = function Title({ children }) {
  return (
    <h2 className="about-section-title text-uppercase pt-5">{children}</h2>
  );
};

AboutSection.TextWrap = function TextWrap({ children }) {
  return <div className="py-4 w-75">{children}</div>;
};

AboutSection.Paragraph = function Paragraph({ children }) {
  return <p className="para p-padding">{children}</p>;
};
