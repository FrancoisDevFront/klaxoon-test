import React from "react";
import { Form } from "react-bootstrap";

import "./form-group.styles.scss";

const FormGroup = ({handleChange, label, options, type, category, ...otherProps }) => (
  <Form.Group className="formGroup">
    {label ? <Form.Label>{label}</Form.Label> : null}
    {
      (type === "section" ? (
        <Form.Control as="select" value={category} onChange={handleChange} {...otherProps}>
          {
              options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))
          }
        </Form.Control>
      ) : (
        <Form.Control onChange={handleChange} type={type} {...otherProps} />
      ))
    }
  </Form.Group>
);  

export default FormGroup;
