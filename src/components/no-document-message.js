import React, { Component } from "react";
import DocumentIcon from '../assets/document-icon-extra-large.svg'
class NoDocumentMessage extends Component {
  render() {
    return (
      <div className="empty-documents-container">
        <DocumentIcon />
        <div className="empty-documents-message">
          <span>No document is added yet</span>
        </div>
      </div>
    );
  }
}

export default NoDocumentMessage;
