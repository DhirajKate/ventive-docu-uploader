import React, { Component } from "react";
import { DocumentTitle, NoDocumentMessage } from "../components";

class DocumentViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: "",
      isLoading: true
    };
  }

  componentWillReceiveProps(newprops) {
    if (newprops.document != null) {
      var reader = new FileReader();

      reader.onload = evt => {
        let that = this;
        that.setState({ fileContent: evt.target.result });
      };
      reader.onerror = function(evt) {
        this.setState({ fileContent: "Unable to read file" });
      };
      reader.readAsText(newprops.document);
    }
  }
  render() {
    return (
      <div className="document-viewer-container">
        {this.props.document ? (
          <div className="document-viewer-wrapper">
            <DocumentTitle document={this.props.document} />
            <div className="document-content">{this.state.fileContent}</div>
          </div>
        ) : (
          <NoDocumentMessage />
        )}
      </div>
    );
  }
}

export default DocumentViewer;
