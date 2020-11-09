import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
  import "./home.css";
const TopNav
 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kim Ha</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                  <Link to="/portfolio/">Portfolio</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link to="/contact">Contact</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Setting
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem>
                  Security
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default TopNav;