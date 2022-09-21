import React from 'react';
import { Link } from 'react-router-dom';

import {
  Row, Col, Navbar, Nav, NavLink, NavItem, NavbarBrand
} from 'reactstrap';

import avatar from '../assets/avatar.png';
import logo from '../assets/logo.png';

const Header = () => (
  <Navbar color="light" light expand="xs" className="bg-white">
      <Row className="w-100 align-items-center g-0">
        <Col className="d-none d-lg-flex justify-content-start">
          <Nav className="mrx-auto" navbar>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" to="/">
                <img src={avatar} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
              </NavLink>
            </NavItem>

            <NavItem className="d-flex align-items-center">
              <NavLink tag={Link} className="font-weight-bold" to="/">Home</NavLink>
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
              <NavLink tag={Link} className="font-weight-bold" to="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
  </Navbar>
);

export default Header;