import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-secondary text-white text-uppercase fixed-bottom p-3 mt-2 border-top border-primary"
    >
        connect with us... 1. facebook 2. instagram 3. twitter
    </Container>
  );
};

export default Footer;
