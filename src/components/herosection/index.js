import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Btn from "../button";
import Image from "react-bootstrap/Image";
import Section from "../section";
import "../../styles/global.css";
import "./styles.css";

export default function HeroSection({
  dashTitle,
  mainTitle,
  subTitle,
  bgText,
  bgImage,
  heroImage,
  alt,
  buttons,
}) {
  return (
    <Section imgUrl={bgImage}>
      <Container>
        <Row>
          <Col className="site-title" lg={6} md={12}>
            <HeroSection.DashTitle>{dashTitle}</HeroSection.DashTitle>
            <HeroSection.MainTitle>{mainTitle}</HeroSection.MainTitle>
            <HeroSection.SubTitle>{subTitle}</HeroSection.SubTitle>
            {buttons.map((button) => (
              <Btn key={button.innerText} type={button.buttonType}>
                {button.innerText}
              </Btn>
            ))}
          </Col>
          <Col lg={6} md={12}>
            <Image className="hero-img" src={heroImage} alt={alt} fluid />
          </Col>
        </Row>
      </Container>
      <HeroSection.BgText>{bgText}</HeroSection.BgText>
    </Section>
  );
}

HeroSection.DashTitle = function DashTitle({ children }) {
  return <h3 className="title-text dash-title">{children}</h3>;
};

HeroSection.MainTitle = function MainTitle({ children }) {
  return <h1 className="title-text text-uppercase main-title">{children}</h1>;
};

HeroSection.SubTitle = function SubTitle({ children }) {
  return <h4 className="title-text text-uppercase sub-title">{children}</h4>;
};

HeroSection.BgText = function BgText({ children }) {
  return <h1 className="bg-text">{children}</h1>;
};
