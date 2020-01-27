import React from "react";
import logo from "./img/reactfirebase.png";
import { Navbar } from "react-bootstrap";

const Foot = () => {
  return (
    <div className="InfoFoot">
      <Navbar bg="dark" variant="dark">
        <Navbar.Text href="#/">
          <img src={logo} alt="Logo" />
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="http://www.github.com/mikearino">Mike Lofgren</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Foot;
