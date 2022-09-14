import React from 'react';

import {
  Container, Row, Col, Navbar, Nav, NavLink, NavItem, NavbarBrand
} from 'reactstrap';

import avatar from '../assets/avatar.png';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

      <Container>
        <Row className="position-relative w-100 align-items-center g-0">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" to="/">
                  <img src={avatar} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" to="/">Home</NavLink>
              </NavItem>

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" to="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" to="/">About</NavLink>
              </NavItem>
            </Nav>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;