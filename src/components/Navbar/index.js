import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DigiArea</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}
