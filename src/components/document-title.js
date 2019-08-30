import React from "react";
import DocumentIcon from "../assets/document-icon-large.svg";
const DocumentTitle = props => {
  return (
    <div className="document-wrapper">
      <DocumentIcon />
      <div className="document-title">
        <span>{props.document.name}</span>
      </div>
    </div>
  );
};

export default DocumentTitle;
