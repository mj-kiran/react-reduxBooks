import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
function Header() {
  return (
    
      <Navbar className="navbar_header" bg="primary" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='title_store ms-3'>Choice Books & Stationery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About us</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default Header







