import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Col,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  NavbarBrand,
  Collapse,
} from "reactstrap";

import avatar from "../assets/avatar.png";
import avatar_neh from "../assets/neh.png";
import avatar_rey from "../assets/rey.png";

import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar expand="sm" className="bg-white" style={{ height: "8vh" }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="me-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" to="/">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="img-fluid rounded-circle"
                    style={{ width: 36 }}
                  />
                </NavLink>
              </NavItem>
              <NavItem
                className="d-flex align-items-center"
                style={{ marginLeft: -28 }}
              >
                <NavLink className="font-weight-bold" to="/">
                  <img
                    src={avatar_neh}
                    alt="avatar"
                    className="img-fluid rounded-circle"
                    style={{ width: 36 }}
                  />
                </NavLink>
              </NavItem>
              <NavItem
                className="d-flex align-items-center"
                style={{ marginLeft: -28 }}
              >
                <NavLink className="font-weight-bold" to="/">
                  <img
                    src={avatar_rey}
                    alt="avatar"
                    className="img-fluid rounded-circle"
                    style={{ width: 36 }}
                  />
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink tag={Link} className="font-weight-bold" to="/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink tag={Link} className="font-weight-bold" to="/import">
                  Import
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand
              className="d-inline-block p-0"
              to="/"
              style={{ width: 120 }}
            >
              <img
                src={logo}
                alt="logo"
                className="position-relative img-fluid"
              />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink tag={Link} className="font-weight-bold" to="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
