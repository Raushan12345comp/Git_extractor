import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import firebase from 'firebase/app';


const handleLogout = () => {
  firebase.auth().signOut();

}

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="border-bottom border-primary p-2  fixed-top" light expand="md">
      <NavbarBrand>
        <Link to="/" className=" p-2">
          Git Extractor
        </Link>
      </NavbarBrand>
      <NavbarText>
        {context.user?.email ? context.user.email : ''}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {context.user ? (
            <>
            <NavItem>
              <NavLink tag={Link} to="/" onClick= {() => handleLogout(context.setUser(null))} >
                Logout
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/" >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>

            </>
            
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" >
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" >
                  Signin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about" >
                  About
                </NavLink>
              </NavItem>
            </>
            
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
