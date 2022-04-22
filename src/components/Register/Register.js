import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const [registerData, setRegisterdata] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...registerData };
    newData[field] = value;
    setRegisterdata(newData);
  };

  const handleRegisterWithEmail = (e) => {
    const data = registerData;
    console.log(data);
    e.preventDefault();
  };

  return (
    <>
      <div className="register__section">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleRegisterWithEmail}>
                <h3>Create An Accout</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    onBlur={handleOnBlur}
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={handleOnBlur}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={handleOnBlur}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button>Create An Accout</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
