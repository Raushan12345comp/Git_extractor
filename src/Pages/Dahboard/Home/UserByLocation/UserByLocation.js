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
  CardBody
} from "reactstrap";

import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";

const UserByLocation = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/search/users?q=${query}+in:location`
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
      <Container style={{ marginTop: "80px" }}>
        <Row className=" mt-3">
          <Col md="12">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the country name"
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
            <Col md="12">
              {user ? (
                <div style={{marginTop: "20px"}}>
                  {user.items.map((element, index) => {
                    return (
                      <Card className="text-center mt-3 mb-4">
                        <li
                          key={index}
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <a 
                        style={{marginTop: "10px"}}

                           target="_blank" href={element.html_url}>
                            <img
                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.avatar_url}
                            ></img>
                            <CardBody>
                            <div className="text-info">{element.type}</div>

                            </CardBody>

                          </a>
                        </li>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <h1 className="text-white" style={{ marginTop: "130px" }}>
                  Raushan Kumar
                </h1>
              )}
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserByLocation;
