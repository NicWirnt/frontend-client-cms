import React, { useEffect } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCatAction } from "../../pages/categories/categoryAction";

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
            <Nav.Link className="text-black">
              <Link to="/">Home Page</Link>
            </Nav.Link>
            <Nav.Link className="text-black">
              <Link to="/products">Products</Link>
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
                    <NavDropdown.Item>
                      <Link className="" to={`/category/${item._id}`}>
                        {item.catName}
                      </Link>
                      {childrenCat.map((cat, index) => (
                        <>
                          {cat.parentCatId === item._id && (
                            <NavDropdown.Item>
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
          <Nav>
            <Nav.Link>
              <Link to="/login" className="text-black">
                Login
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/register" className="text-black">
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <br />
    </Navbar>
  );
};
