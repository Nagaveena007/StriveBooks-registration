import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Demo.css";
export default function Registration() {
  const { register, handleSubmit } = useForm();
  const { fields, setFields } = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { success, setSuccess } = useState(false);
  const [result, setResult] = useState("");

  const handleInput = (key, value) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    setSuccess({
      success: true,
    });
  };

  const formIsValidated = () => {
    let isValidated = false;
    if (
      fields.name.length >= 2 &&
      fields.surname.length >= 3 &&
      fields.password.length >= 8 &&
      fields.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
      fields.password === fields.confirmPassword
    ) {
      isValidated = true;
    }
    return isValidated;
  };

  /*  const onSubmit = (data) => {
    <Alert>(JSON.stringify(data))</Alert>;
  }; */
  const {
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="body justify-content-center">
      <h2>Registration Page</h2>
      <form
        onSubmit={handleRegistration}
        style={{ width: "100vh", marginLeft: "400px" }}
      >
        <input
          required
          onChange={(e) => handleInput("name", e.target.value)}
          value={fields.name}
          placeholder="First name"
          className="mt-5"
        />
        {!success?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {!success?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {!success?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}

        <input
          required
          {...register("lastName", { required: true, minLength: 3 })}
          placeholder="Surname"
          onChange={(e) => handleInput("surname", e.target.value)}
          value={fields.surname}
        />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input
          required
          {...register("Email", {
            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          })}
          onChange={(e) => handleInput("email", e.target.value)}
          value={fields.email}
          placeholder="EmailId"
          type="email"
          class="form-control"
          id="exampleInputPassword1"
        />
        <input
          required
          {...register("Password")}
          onChange={(e) => handleInput("password", e.target.value)}
          value={fields.password}
          placeholder="Password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
        <input
          required
          {...register("Confirm Password")}
          onChange={(e) => handleInput("confirmPassword", e.target.value)}
          value={fields.confirmPassword}
          placeholder=" Confirm Password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
        <p>{result}</p>
        <input />
        <button type="submit" disabled={!formIsValidated()}>
          submit
        </button>
      </form>
    </div>
  );
}
/**import { useEffect, useState } from "react";
import { Row, Column, Form, Button, Container } from "react-bootstrap";
const Registration = () => {
  return (
    Name - Required, at least 2 chars
Surname - Required, at least 3 chars
Email - Required - Should be an email field
Password - Required - Should contain at least 8 chars, 1 digit, 1 letter
PasswordConfirm - Required - Should have the same value as Password 
    <Container fluid>
      <h2>Registration Form</h2>
      <Row className="d-flex justify-content-center ">
        <Form
          className="align-items-center mb-4 mt-3"
          style={{ border: "2px solid black", width: "80vh", height: "70vh" }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Surname" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
export default Registration;*/
