import React from "react";
import { Badge } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "./Naav.css" ;


const Naav = (props) => {
    let product = props.products.filter((e)=> e.count > 0)

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand className="fw-bold">Shopping</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Badge className="me-3 text fs-6" bg={product.length > 0 ? "success" : "danger"} style={{width:"2rem"}}>{product.length}</Badge>
                      <NavLink className="me-3 text-decoration-none  fw-bold" to="/Home">ShoppingCart</NavLink>
                      <NavLink className="me-3 text-decoration-none  fw-bold" to="/Detals">ProductDetals</NavLink>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Naav;