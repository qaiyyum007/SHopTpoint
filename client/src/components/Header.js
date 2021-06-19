import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './style.css';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
          <Navbar   bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>

                  <LinkContainer to="/">
                  <Navbar.Brand >ShopTpoint</Navbar.Brand>

                  </LinkContainer>

    <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto "
      
    >
        <LinkContainer to="/cart">
        <Nav.Link > <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link > <i className="fas fa-user"></i> Sign In</Nav.Link>
        </LinkContainer>
    </Nav>
   
  </Navbar.Collapse>

              </Container>
 
</Navbar>
        </header>
    )
}

export default Header
