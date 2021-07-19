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
import Footer from "../../../../layout/Footer/Footer";

import cell from '../../../../img/cell.svg'

const UserByRepos = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=40&page=${page}`
      );
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  const username = () => {
    toast("username copied paste it to see the details...")
  }

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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please Provide the repos language"
                className="text-white"
              />

              <Input
                type="number"
                min="1"
                
                value={page}
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no."
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
                            href={element.owner.html_url}
                          >
                            <img
                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.owner.avatar_url}
                            ></img>
                          </a>
                          

                            <CardBody>
                              <div className="text-info">
                                <p className="auth-card-header">{element.owner.login}</p>
                                <p className='auth-label'>{element.name}</p>
                                <p className='auth-label'>Forks: {element.forks}</p>
                                <p className='auth-label'>Open issues: {element.open_issues}</p>
                                <p className='auth-label'>Watchers: {element.watchers}</p>
                                
                              </div>
                              <Link exact to="home">
                            <CopyToClipboard text={element.login}>
                              <Button className="auth-btn" onClick={username}>user details</Button>
                            </CopyToClipboard>
                        
                            </Link>
                              
                            </CardBody>
                           
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
      <Footer />
    </>
  );
};

export default UserByRepos;
