import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AddressForm = () => {
  const navigate = useNavigate();

  const australiaState = [
    "New South Wales(NSW)",
    "Victoria(VIC)",
    "Queensland(QLD)",
    "South Australia(SA)",
    "Western Australia (WA)",
    "Tasmania (TAS)",
  ];
  const [detail, setDetail] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setDetail({
      ...detail,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(detail);
    navigate("/checkout/payment");
  };
  console.log(detail);
  return (
    <div>
      <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <Form.Group
          className="mb-3 d-flex space-between"
          controlId="exampleForm.ControlInput1"
        >
          <div>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="px-3">
            {" "}
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lName"
              placeholder="Enter your last name"
              required
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            name="postcode"
            placeholder="Enter your postcode"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Town/City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter your suburb"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Select
            aria-label="Default select example"
            required
            name="state"
          >
            <option>Select Your State</option>
            {australiaState.map((item, i) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="House number and street name"
            name="addressName"
          />
          <Form.Control
            type="text"
            placeholder="Apartment, suite, unit, etc (optional)"
            name="addressDetail"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>
        <Form.Group className="py-3 ">
          <Button className="" type="submit">
            Submit Your Details
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
