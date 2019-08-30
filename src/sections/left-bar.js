import React, { Component } from "react";
import { Logo, UploadButton } from "../components";
import FilesMenuSection from "./files-menu-section";
import './style.scss'
class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar-container">
        <Logo />
        <FilesMenuSection {...this.props}/>
        <UploadButton/>
      </div>
    );
  }
}

export default LeftBar;
