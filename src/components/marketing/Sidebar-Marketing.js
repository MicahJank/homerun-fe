import React from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Button } from "semantic-ui-react";

const SidebarMarketing = () => {
  return (
    <Menu right>
      <NavLink exact to="/" activeClassName="active" className="menu-item">
        Home
      </NavLink>
      <NavLink to="/about" className="menu-item">
        Team
      </NavLink>
      <NavLink to="/contact" className="menu-item">
        Contact
      </NavLink>
      <Link to="/signup" className="menu-item" className="mobile-btn">
        <Button type="submit">Sign&nbsp;Up</Button>
      </Link>
      <Link to="/signin" className="menu-item" className="mobile-btn">
        <Button type="submit">Sign&nbsp;In</Button>
      </Link>
    </Menu>
  );
};

export default SidebarMarketing;