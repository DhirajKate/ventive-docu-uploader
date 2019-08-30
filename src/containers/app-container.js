import React, { Component } from "react";
import { LeftBar } from "../sections";
import { DocumentViewer } from "../sections";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import "./index.scss";
import "../components/index.scss";
import { setActiveFileIndex, addFile } from "../redux/actions";
class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <LeftBar />
        <DocumentViewer />
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
    setActiveFileIndex: bindActionCreators(setActiveFileIndex, dispatch),
    addFile: bindActionCreators(addFile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
