import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Row,
  Container,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  CardBody,
  card
} from "reactstrap";
import { UserContext } from "../../../context/UserContext";
import { Redirect } from "react-router-dom";

const UserRepos = () => {

  const context = useContext(UserContext);


  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");

  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(
      `https://api.github.com/users/${query}/repos?q= &per_page=40&page=${page}`
    );
    setRepos(data);
    console.log(data);
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  } 

  // useEffect(() => {
  //     fetchRepos()
  // }, [])

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
                placeholder="Please provide the username"
                // className="text-white"
              />

              <Input
                type="number"
                min="1"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no."
                // className="text-white"
              />

              <InputGroupAddon addonType="append">
                <Button onClick={fetchRepos} color="primary">
                  Fetch Repos
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          {/* <card className="text-center mt-3 mb-4">
            <a target="_blank" href={repos.owner}>
              <img src={repos.owner} className="img-thumbnail" />
            </a>
          </card> */}

          <div style={{ marginBottom: "80px" }}>
            <ListGroup className="mb-10">
              {repos.map((repo) => (
              
                <ListGroupItem key={repo.id}>
                
                  <a target="_blank" href={repo.html_url}>
                    <div className="text-primary">{repo.name}</div>
                  </a>

                  <div className="text-secondary">{repo.language}</div>
                  <div className="text-info">{repo.description}</div>
                  <div className="text-info">Size: {repo.size}</div>
                  <div className="text-info">
                    Open issues: {repo.open_issues}
                  </div>
                  <div className="text-info">
                    Default branch: {repo.default_branch}
                  </div>
                  <div className="text-info">
                    create date: {repo.created_at}
                  </div>
                  <div className="text-info">
                    update date: {repo.updated_at}
                  </div>
                  <div className="text-info">
                    pushed date: {repo.updated_at}
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UserRepos;
