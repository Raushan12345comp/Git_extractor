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
import cell from '../../../img/cell.svg'

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
      <Container style={{ marginTop: "50px", marginBottom: '100px' }}>
        <Row className=" mt-3">
          <Col md="10">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please provide the username"
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
                <Button onClick={fetchRepos} className="auth-btn">
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
          
          <Col md='10'  style={{ marginBottom: "50px", marginTop: "20px",}}>
          {repos? (
            <ListGroup >
              {repos.map((repo) => (
              
                <ListGroupItem key={repo.id}>
                
                  <a style={{textDecoration: 'none'}} target="_blank" href={repo.html_url}>
                    <div className="auth-card-header">{repo.name}</div>
                  </a>

                  <div className="auth-label">{repo.language}</div>
                  <div className="auth-label">{repo.description}</div>
                  <div className="auth-label">Size: {repo.size}</div>
                  <div className="auth-label">
                    Open issues: {repo.open_issues}
                  </div>
                  <div className="auth-label">
                    Default branch: {repo.default_branch}
                  </div>
                  <div className="auth-label">
                    create date: {repo.created_at}
                  </div>
                  <div className="auth-label">
                    update date: {repo.updated_at}
                  </div>
                  <div className="auth-label">
                    pushed date: {repo.updated_at}
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
            
            ) : (
              <p
                style={{ marginTop: "100px" , paddingLeft: "100px"}}
                className="text-white text-center pt-20"
              >
                <img src={cell} height= "400vh"></img>
              </p>
            )}
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRepos;
