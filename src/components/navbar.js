import React from "react";
import Menu from "../assets/menu.svg";
import Logo from "./logo";

const Navbar = props => {
  return (
    <div className="navbar">
      <div
        className="menu-button"
        onClick={e => {
          e.stopPropagation();
          props.toggelNavbar(true);
        }}
      >
        <Menu />
      </div>

      <Logo />
    </div>
  );
};

export default Navbar;
