import React from "react";
import DocumentIcon from "../assets/document-icon-extra-large.svg";
const NoDocumentMessage = props => {
  return (
    <div className="empty-documents-container">
      <DocumentIcon />
      <div className="empty-documents-message">
        <span>No document is added yet</span>
      </div>
    </div>
  );
};

export default NoDocumentMessage;
