import React, { Component } from "react";
import { connect } from "react-redux";
import { DocumentViewer, LeftBar } from "../sections";
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDocument: null,
      isOpen: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.documents.length != newProps.documents.length ||
      this.props.activeFileIndex != newProps.activeFileIndex
    ) {
      this.setState({
        activeDocument: newProps.documents[newProps.activeFileIndex]
      });
    }
  }

  toggelNavbar(isOpen) {
    this.setState({
      isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <LeftBar
          documentList={this.props.documentsMetadata}
          isOpen={this.state.isOpen}
          toggelNavbar={this.toggelNavbar.bind(this)}
        />
        <DocumentViewer
          document={this.state.activeDocument}
          toggelNavbar={this.toggelNavbar.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ documents, documentsMetadata, activeFileIndex }) => ({
  documents, documentsMetadata, activeFileIndex
});

export default connect(
  mapStateToProps,
  null
)(AppContainer);
