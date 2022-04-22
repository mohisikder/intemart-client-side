import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../Register/Register.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="register__section">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleLoginWithEmail}>
                <h3>Login</h3>
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
                <Button>Login</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
