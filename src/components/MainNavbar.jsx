import React from "react";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function MainNavbar() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cv">CV</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/cv">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/cv">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default MainNavbar;
