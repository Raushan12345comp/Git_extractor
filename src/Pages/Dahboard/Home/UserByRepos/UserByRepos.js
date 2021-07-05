import React, { useState, useContext } from "react";

// import Footer from '../../../../layout/Footer/Footer'

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
import Footer from "../../../../layout/Footer/Footer";

const UserByRepos = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Container style={{marginTop: "80px"}} >
        <Row className=" mt-3">
          <Col md="12">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the repos language"
                className="text-white"
              />

              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
            <div style={{display: "flex"}}>
              {user ? (
                <div style={{ display:"flex", flexWrap: "wrap"}}>
                  {user.items.map((element, index) => {
                    return (
                      <div
                        className="text-center mt-3 mb-4"
                      >
                        <li 
                        style={{display: "flex" , flexDirection: "row", margin: "20px"}}
                        
                        key={index}>
                          <a
                            style={{ marginTop: "10px" }}
                            target="_blank"
                            // href={element.html_url}
                          >
                            <img

                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.name}
                            ></img>
                            <CardBody>
                              <div className="text-info">{element.full_name}</div>
                            </CardBody>
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
      <Footer />
    </>
  );
};

export default UserByRepos;