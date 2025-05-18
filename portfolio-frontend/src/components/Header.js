import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/App.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar retro-header navbar-dark">
      <Container>
        {/* Navbar Brand (Right Side Name) */}
        <Navbar.Brand as={Link} to="/" className="retro-title">
          Larson Evans
        </Navbar.Brand>

        {/* Hamburger Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links in the Navbar */}
            <Nav.Link as={Link} to="/Resume" className="retro-link">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="retro-link">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="retro-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
