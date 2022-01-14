import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./Demo.css";

const Demo = () => {
  const [registration, setRegistration] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showComplete, setShowComplete] = useState(false),
    /* state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    showComplete: false,
  }; */

    handleInput = (property, value) => {
      setRegistration({
        ...registration,
        [property]: value,
      });
    };
  const formIsValidated = () => {
    let isValidated = false;
    if (
      registration.name.length >= 2 &&
      registration.surname.length >= 3 &&
      registration.password.length >= 8 &&
      registration.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
      ) &&
      registration.password === registration.confirmPassword
    ) {
      isValidated = true;
    }
    return isValidated;
  };

  /* handleRegistration = (e) => {
    e.preventDefault();
    this.setState({
      showComplete: true,
    });
  }; */
  const handleRegistration = (e) => {
    e.preventDefault();
    setShowComplete({
      showComplete: true,
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {showComplete ? (
        <>
          <h1>Registration complete!</h1>
          <h3>Your details:</h3>
          <p>{registration.name}</p>
          <p>{registration.surname}</p>
          <p>{registration.email}</p>
        </>
      ) : (
        <>
          <h1>Registration form</h1>
          <Form onSubmit={handleRegistration}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput("name", e.target.value)}
                value={registration.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput("surname", e.target.value)}
                value={registration.surname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => handleInput("email", e.target.value)}
                value={registration.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => handleInput("password", e.target.value)}
                value={registration.password}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => handleInput("confirmPassword", e.target.value)}
                value={registration.confirmPassword}
              />
            </Form.Group>
            <Button type="submit" disabled={!formIsValidated()}>
              Register
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Demo;
