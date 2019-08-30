import React, { Component } from "react";
import { LeftBar } from "../sections";
import { DocumentViewer } from "../sections";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveFileIndex, addFile } from "../redux/actions";
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDocument: null,
      isOpen:false
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

  toggelNavbar(isOpen){
      this.setState({
        isOpen
      })
  }
  render() {
    return (
      <div className="container">
        <LeftBar documentList={this.props.documentsMetadata} isOpen={this.state.isOpen} toggelNavbar={this.toggelNavbar.bind(this)}/>
        <DocumentViewer document={this.state.activeDocument} toggelNavbar={this.toggelNavbar.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = function({
  documents,
  documentsMetadata,
  activeFileIndex
}) {
  return {
    documents,
    documentsMetadata,
    activeFileIndex
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    setActiveFileIndex: bindActionCreators(setActiveFileIndex, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
