import React, { Component } from "react";
import { FileMenuList, Logo, UploadButton } from "../components";
class LeftBar extends Component {
  render() {
    return (
      <div
        className={
          this.props.isOpen ? "left-bar-container open" : "left-bar-container"
        }
      >
        <Logo />
        <div className="left-bar-content">
        <FileMenuList {...this.props} />
        <UploadButton />
        </div>
      </div>
    );
  }
}

export default LeftBar;
