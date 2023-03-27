import React from "react";
import { Form, FormGroup, Label, Input } from "react-bootstrap";
export const AddressForm = () => {
  const australiaState = [
    "New South Wales(NSW)",
    "Victoria(VIC)",
    "Queensland(QLD)",
    "South Australia(SA)",
    "Western Australia (WA)",
    "Tasmania (TAS)",
  ];
  return (
    <div>
      <Form>
        <Form.Group
          className="mb-3 d-flex space-between"
          controlId="exampleForm.ControlInput1"
        >
          <div>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </div>
          <div className="px-3">
            {" "}
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Postcode</Form.Label>
          <Form.Control type="text" placeholder="Enter your postcode" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Town/City</Form.Label>
          <Form.Control type="text" placeholder="Enter your suburb" />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Your State</option>
            {australiaState.map((item, i) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="House number and street name"
          />
          <Form.Control
            type="text"
            placeholder="Apartment, suite, unit, etc (optional)"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>
      </Form>
    </div>
  );
};
