import React, { Component, Components, useEffect } from "react";
import { Form } from "reactstrap";
import Input from "reactstrap";
import { TextareaHTMLAttributes } from "react";
import Button from "reactstrap";
import Placeholder from "reactstrap";
import { useState } from "react";

export default function Contact() {
  const initialValues = { first_name: "", last_name: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /[^\s]*@[a-z0-9.-]*/i;
    if (!values.first_name) {
      errors.first_name = "First Name is required!";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };
  let name = "Victor Eni";
  return (
    <div className="container-2">
      <div className="left">
        <h1>Contact me</h1>
        <p>Hello! contact me for anything</p>

        <form onSubmit={handleSubmit}>
          <div className="float">
            <div className="float_1">
              <label>First Name</label> <br />
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                name="first_name"
                value={formValues.first_name}
                onChange={handleChange}
              />
              <br />
              <br />
            </div>
            <div>
              <p className="errors" style={{ color: "red" }}>
                {formErrors.first_name}
              </p>
            </div>
            <div className="float_2">
              <label>Last Name</label> <br />
              <input
                id="last_name"
                type="text"
                placeholder="Enter your first name"
                name="last_name"
                value={formValues.last_name}
                onChange={handleChange}
              />
              <br />
              <br />
            </div>
            <div>
              <p className="errors" style={{ color: "red" }}>
                {formErrors.last_name}
              </p>
            </div>
          </div>
          <label>Email</label> <br />
          <input
            id="email"
            type="email"
            placeholder="yourname@gmail.com"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <p className="errors" style={{ color: "red" }}>
            {formErrors.email}
          </p>
          <label>Message</label> <br />
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
          <div className="float_3">
            <input type="checkbox" />
            <label className="checkbox">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>
          <button id="btn__submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
