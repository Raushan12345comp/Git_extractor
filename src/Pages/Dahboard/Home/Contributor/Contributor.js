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

const Contributor = () => {
  const context = useContext(UserContext);

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
      

    const url = `https://api.github.com/repos/${query1}/${query2}/stats/contributors`

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
      <Container style={{marginTop: "80px"}} >
        <Row className=" mt-3">
          <Col md="12">
            <InputGroup>
              <Input
                type="text"
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the country name or provide name or username"
                className="text-white"
              />
               <Input
                type="text"
                value={query2}
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the country name or provide name or username"
                className="text-white"
              />

              {/* <Input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please Provide the date in yyyy-mm-day"
                className="text-white"
              /> */}

              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <div>
            {/* <div style={{display: "flex"}}>
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
                            href={element.html_url}
                          >
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
                      </div>
                    );
                  })}
                </div>
              ) : (
                <h1 className="text-white" style={{ marginTop: "130px" }}>
                  Raushan Kumar
                </h1>
              )}
            </div> */}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contributor;