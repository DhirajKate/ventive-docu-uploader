import React from "react";
import MenuItem from "./menu-item";

const FilesMenuList = props => {
  return (
    <div className="menu-list-container">
      <h1 className="menu-header">Files</h1>
      <div className="menu-list">
        {props.documentList.map((document, index) => {
          return (
            <MenuItem
              document={document}
              index={index}
              toggelNavbar={props.toggelNavbar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilesMenuList;
