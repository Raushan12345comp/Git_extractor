import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
import UserCard from "../../../Components/UserCard/UserCard";
import { Repos } from "../../../Components/Repos/Repos";
import { Link, Redirect } from "react-router-dom";
// import firebase from "firebase/app";

const Home = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  // Put anypage behind login

  // useEffect(() => {
  //   if (!context.user?.uid) {
  //     return <Redirect to="/signin" />
  //   }
  // }, [])

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row className=" mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please provide the username"
                className="text-white"
              />

              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {user ? (
              <UserCard user={user} />
            ) : (
              <p
                style={{ marginTop: "100px" }}
                className="text-white text-center pt-20"
              >
                Github Image... decide and create attractive design of github
              </p>
            )}
          </Col>
          <Col md="7">
            {user ? (
              <Repos repos_url={user.repos_url} />
            ) : (null)}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
