import React from "react";
import logo from "./img/reactfirebase.png";
import { Navbar } from "react-bootstrap";
import git from "./img/github.png";

const Foot = () => {
  return (
    <div className="InfoFoot">
      <Navbar bg="dark" variant="dark">
        <a href="http://reactjs.org/">
          <img src={logo} alt="Logo" />
        </a>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a class="Git" href="http://www.github.com/mikearino">
            <img src={git} alt="Logo" />
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Foot;
