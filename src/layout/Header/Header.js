import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import firebase from "firebase/app";
import './header.css'

const handleLogout = () => {
  firebase.auth().signOut();
};

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="fixed-top"
      sticky='top'
      expand="md"
      className="navbar"
      style={{backgroundColor: "#f5f5f5"}}

    >
      <NavbarBrand>
        <Link to="/">
          <img
            className="logo"
            style={{ clipPath: "circle()" }}
            width="80px"
            dark
            height="80px"
            src="Images/gif.gif"
          ></img>
        </Link>
      </NavbarBrand>
      <NavbarText  style={{color: "#000",fontFamily: 'cursive'}}>{context.user?.email ? context.user.email : ""}</NavbarText>
      <NavbarToggler  className="toggle navbar-dark"  type="button" onClick={toggle} />
      <Collapse  isOpen={isOpen} navbar>
        <Nav className="ms-auto items" navbar>
          {context.user ? (
            <>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/"
                  onClick={() => handleLogout(context.setUser(null))}
                  className="items"
                  id="logout"
                >
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="items" activeClassName="active_class" tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="items" tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="items" tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink className="items" tag={Link} to="/signup">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="items" tag={Link} to="/signin">
                  Signin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="items" tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="items" tag={Link} to="/contact">
                  Contact
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
