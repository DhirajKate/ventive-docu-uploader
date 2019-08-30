import React, { Component } from "react";
import DocumentIcon from '../assets/document-icon-large.svg'
class DocumentTitle extends Component {
  render() {
    return (
      <div className="document-wrapper">
        <DocumentIcon />
        <div className="document-title">
          <span>{this.props.document.name}</span>
        </div>
      </div>
    );
  }
}

export default DocumentTitle;
