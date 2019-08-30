import React, { Component } from "react";
import Logo from "./logo";
import Menu from "../assets/menu.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="menu-button" onClick={(e)=>{e.stopPropagation();this.props.toggelNavbar(true)}}>
          <Menu />
        </div>

        <Logo />
      </div>
    );
  }
}

export default Navbar;
