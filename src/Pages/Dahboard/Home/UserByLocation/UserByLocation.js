import React, { useState, useContext, useEffect } from "react";

// import Footer from '../../../../layout/Footer/Footer'
import {CopyToClipboard} from 'react-copy-to-clipboard';


import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Card,
  CardBody,
} from "reactstrap";

import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import Home from "../Home";

const UserByLocation = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState(null);

  const fetchDetails = async () => {
    const url = `https://api.github.com/search/users?q=location:${query}+language:${language} &per_page=40&page=${query1}`;

    try {
      const { data } = await Axios.get(url);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  const username = () => {
    toast("username copied paste it to see the details...")
  }

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row className=" mt-3">
          <Col md="12">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the country name"
                // className="text-white"
              />

              <Input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="enter language"
                // className="text-white"
              />

              <Input
                type="number"
                min="1"
                
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Enter the page no."
                // className="text-white"
              />

              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
            <div style={{ display: "flex" }}>
              {user ? (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {user.items.map((element, index) => {
                    return (
                      <div className="text-center mt-3 mb-4">
                        <li
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "20px",
                          }}
                          key={index}
                        >
                          <a
                            style={{ marginTop: "10px" }}
                            target="_blank"
                            href={element.html_url}
                          >
                            <img
                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.avatar_url}
                            ></img>
                            <CardBody>
                              <div className="text-info">{element.login}</div>
                            </CardBody>
                            <Link exact to="home">
                            <CopyToClipboard text={element.login}>
                              <button className="text-white" onClick={username}>see user details</button>
                            </CopyToClipboard>
                        
                            </Link>
                           
                            
                          </a>
                        </li>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <h1 className="text-white" style={{ marginTop: "130px" }}>
                  Raushan Kumar
                </h1>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserByLocation;
