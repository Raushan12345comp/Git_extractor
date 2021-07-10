import React from "react";
import { Container } from "reactstrap";

import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center text-uppercase fixed-bottom p-3 mt-2 border-top border-primary"
    >
      <div >
        Connect with us..
        <a style={{marginLeft: "50px", fontSize: "20px"}} target="_blank" href="https://www.facebook.com/Git-Extractor-107399428283927" >
          <FaFacebook />
        </a>
        <a target="_blank" style={{marginLeft: "50px", fontSize: "20px"}} href="https://www.instagram.com/git_extractor/">
          <FaInstagramSquare />
        </a>
        <a target="_blank" style={{marginLeft: "50px", fontSize: "20px"}} href="https://twitter.com/home">
          <FaTwitter />
        </a>
        </div>
    </Container>
  );
};

export default Footer;
