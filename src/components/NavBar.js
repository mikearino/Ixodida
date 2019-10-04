import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import NavIcon from "./img/navIcon.png";

const NavBar = () => {
  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <img src={NavIcon} className="NavIcon" />
        <Navbar.Brand href="#/">Ixodida</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/tickmap">Tick Locations</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
