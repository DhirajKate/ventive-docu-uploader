import React, { Component } from "react";
import { LeftBar } from "../sections";
import { DocumentViewer } from "../sections";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import "./index.scss";
import "../components/index.scss";
import { setActiveFileIndex, addFile } from "../redux/actions";
class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            activeDocument:null
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        console.log(this.props)
        if(this.props.documents.length!=newProps.documents.length ||this.props.activeFileIndex!=newProps.activeFileIndex){
            console.log("newProps")
            this.setState({
                activeDocument:newProps.documents[newProps.activeFileIndex]
            })
        }
    }
  render() {
     
    return (
      <div className="container">
        <LeftBar documentList={this.props.documentsMetadata}/>
        <DocumentViewer document = {this.state.activeDocument} />
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
