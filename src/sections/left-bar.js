import React, { Component } from "react";
import { Logo } from "../components";
import FilesMenuSection from "./files-menu-section";
import './style.scss'
class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar-container">
        <Logo />
        <FilesMenuSection/>
      </div>
    );
  }
}

export default LeftBar;
