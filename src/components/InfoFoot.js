import React from "react";
import { Navbar } from "react-bootstrap";

const InfoFoot = () => {
  return (
    <div className="InfoFoot">
      <Navbar bg="dark" variant="dark">
        <Navbar.Text href="#/">Home</Navbar.Text>
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

export default InfoFoot;
