import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";

function NavigationBar() {
  return (
    <Container style={{ maxWidth: "2000px" }}>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src="images/logo.png" alt="cannot display" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;
