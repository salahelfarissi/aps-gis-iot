import React from 'react';

import {
  Container, Row, Col, Navbar, Nav, NavLink, NavItem
} from 'reactstrap';

import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={logo} alt="logo" className="img-fluid rounded-circle" style={{ width: 66 }} />
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

            </Nav>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;