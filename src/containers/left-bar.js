import React, { Component } from "react";
import { Logo } from "../components";

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar-container">
        <Logo />
      </div>
    );
  }
}

export default LeftBar;
