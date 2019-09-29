import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

 const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/">Ixodida</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/tickmap">Tick Locations</Nav.Link>
        </Nav>
       
      </Navbar>
    );
}

export default NavBar;