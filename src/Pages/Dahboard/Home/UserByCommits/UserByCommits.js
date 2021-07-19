import React, { useState, useContext, useEffect } from "react";

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
import cell from '../../../../img/cell.svg'


const UserByCommits = () => {
  const context = useContext(UserContext);

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchDetails = async () => {
    const url = `https://api.github.com/repos/${query1}/${query2}/commits?since=${date} to=${toDate}`;

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

  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Row className=" mt-3">
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the username"
                className="text-white"
              />
              <Input
                type="text"
                value={query2}
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the repositories name"
                className="text-white"
              />

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please Provide the date in yyyy-mm-day"
                className="text-white"
              />

              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="Please Provide the date in yyyy-mm-day"
                className="text-white"
              />
              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} className="auth-btn">
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
            <div style={{ display: "flex" }}>
              {user ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                  {user.map((element, index) => {
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
                            href={element.author.html_url}
                            style={{textDecoration: 'none'}}
                          >
                            <img
                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.author.avatar_url}
                            ></img>
                            <CardBody>
                              <div className="auth-card-header">
                                {element.author.login}
                              </div>
                              <div className="auth-label">
                                {element.commit.committer.date}
                              </div>
                              <div className="auth-label">
                                {element.commit.committer.email}
                              </div>
                              <div className="auth-label">
                                {element.commit.committer.name}
                              </div>
                              <div className="auth-label">
                                {element.commit.message}
                              </div>
                            </CardBody>
                          </a>
                        </li>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p
                style={{ marginTop: "100px" , paddingLeft: "100px"}}
                className="text-white text-center pt-20"
              >
                <img src={cell} height= "400vh"></img>
              </p>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserByCommits;
