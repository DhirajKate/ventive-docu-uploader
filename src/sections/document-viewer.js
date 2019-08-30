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
    console.log("dfdfdf", newprops.document);
    if (newprops.document != null) {
      console.log(newprops.documents);
      var reader = new FileReader();

      reader.onload = evt => {
        let that = this;
        console.log(reader.readyState);
        console.log(reader.result);
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
