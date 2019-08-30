import React, { Component } from "react";
import { FileMenuList, Logo, UploadButton } from "../components";
class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar-container">
        <Logo />
        <FileMenuList {...this.props}/>
        <UploadButton/>
      </div>
    );
  }
}

export default LeftBar;
