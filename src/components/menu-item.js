import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveFileIndex } from "../redux/actions";
import DocumentIcon from "../assets/document-icon.svg";
class MenuItem extends Component {
  render() {
    return (
      <div
        className="menu-item"
        onClick={() => {
          this.props.setActiveFileIndex(this.props.index);
          this.props.toggelNavbar(false);
        }}
      >
        <div className="document-icon">
          <DocumentIcon />
        </div>

        <div className="menu-title">
          <span>{this.props.document.name}</span>
          <span className="sub-title">{this.props.document.type}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  setActiveFileIndex: bindActionCreators(setActiveFileIndex, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
