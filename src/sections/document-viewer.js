import React, { Component } from "react";
import { DocumentTitle, NoDocumentMessage, Navbar } from "../components";

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
      <div className="document-viewer-container" onClick={()=>this.props.toggelNavbar(false)}>
        <Navbar toggelNavbar={this.props.toggelNavbar}/>
        <React.Fragment>
        {this.props.document ? (
          <div className="document-viewer-wrapper" >
            <DocumentTitle document={this.props.document} />
            <div className="document-content">{this.state.fileContent}</div>
          </div>
        ) : (
          <NoDocumentMessage />
         
        )}
         </React.Fragment>
      </div>
    );
  }
}

export default DocumentViewer;
