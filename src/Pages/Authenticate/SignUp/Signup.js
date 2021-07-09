import React, { useState, useContext } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Alert,
} from "reactstrap";

import firebase from "firebase/app";
import { UserContext } from "../../../context/UserContext";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../../layout/Footer/Footer";

const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

  const handleSignUp = () => {
    const notify = () => {
      toast("password doesn't match");
    };

    const success= () => {
        toast("welcome signup success...")
    }

    if (password !== confirmPassword) {
      return notify();
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
        success()
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <Container className="text-center" style={{marginTop: "80px"}}>
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="text-center">Signup here</CardHeader>
              {/* {error && <Alert variant="danger">{error}</Alert>} */}

              <CardBody>
                <FormGroup row className="mb-3">
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      // className="text-white"

                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="mb-3">
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      // className="text-white"

                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="mb-3">
                  <Label for="confirmPassword" sm={3} className="text-center">
                    Confirm Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      // className="text-white"

                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
        <div className="w-100 text-center mt-2">
          Already have an account... <Link to="/signin" className="text-info">Sign in</Link>
        </div>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default Signup;
