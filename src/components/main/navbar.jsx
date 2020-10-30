import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "shards-react";

const NavBar = () => {
    return ( 
        <div>
    <Navbar type="dark" theme="secondary" expand="md">
        <NavbarBrand href="/">Gamex</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Disabled
              </NavLink>
            </NavItem>
            </Nav>
    </Navbar>
        </div>
     );
}
 
export default NavBar;