import React from "react";
import { FileMenuList, Logo, UploadButton } from "../components";
const LeftBar = props => {
  return (
    <div
      className={
        props.isOpen ? "left-bar-container open" : "left-bar-container"
      }
    >
      <Logo />
      <div className="left-bar-content">
        <FileMenuList {...props} />
        <UploadButton />
      </div>
    </div>
  );
};

export default LeftBar;
