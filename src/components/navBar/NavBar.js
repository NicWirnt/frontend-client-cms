import React, { useEffect } from "react";
import { Button, Col, Dropdown, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCatAction } from "../../pages/categories/categoryAction";
import "./navBar.css";

export const NavBarComp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatAction());
  }, []);

  const { categories } = useSelector((state) => state.categories);

  const parentCat = categories.filter((item, i) => !item.parentCatId);
  const childrenCat = categories.filter((item, i) => item.parentCatId);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg=""
      variant=""
      className="shadow-sm"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/"
              >
                Home Page
              </Link>
            </Nav.Link>
            <Nav.Link className="">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/products"
              >
                Products
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              align={{ lg: "end" }}
              style={{}}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxHeight: "300px",
                  minWidth: "400px",
                  overflowY: "scroll",
                }}
              >
                {parentCat.map((item, i) => (
                  <>
                    <NavDropdown.Item className="no-hover">
                      <Link className="" to={`/category/${item._id}`}>
                        {item.catName}
                      </Link>
                      {childrenCat.map((cat, index) => (
                        <>
                          {cat.parentCatId === item._id && (
                            <NavDropdown.Item className="no-hover">
                              <Link
                                to={`/category/${cat._id}`}
                                style={{
                                  textDecoration: "none",
                                }}
                              >
                                {cat.catName}
                              </Link>
                            </NavDropdown.Item>
                          )}
                        </>
                      ))}
                      <Dropdown.Divider />
                    </NavDropdown.Item>
                  </>
                ))}
              </div>
            </NavDropdown>
          </Nav>
          <Col xs={5} className="m-2 sm-6">
            <InputGroup className="">
              <Form.Control placeholder="Search Item" />
              <Button variant="primary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Navbar.Collapse>
      </Container>
      <br />
    </Navbar>
  );
};
