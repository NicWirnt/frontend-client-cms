import React, { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatAction } from "../../pages/categories/categoryAction";

export const NavBarComp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatAction());
  }, []);

  const { categories } = useSelector((state) => state.categories);

  const parentCat = categories.filter((item, i) => !item.parentCatId);
  const childrenCat = categories.filter((item, i) => item.parentCatId);
  console.log(categories);
  return (
    <div className="" sticky="top">
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home Page</Nav.Link>
              <Nav.Link to="/products">Products</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                {parentCat.map((item, i) => (
                  <>
                    <NavDropdown.Item>{item.catName}</NavDropdown.Item>
                    {childrenCat.map((cat, index) => (
                      <>
                        {cat.parentCatId === item._id && (
                          <NavDropdown.Item> ➡️ {cat.catName}</NavDropdown.Item>
                        )}
                      </>
                    ))}
                  </>
                ))}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};
