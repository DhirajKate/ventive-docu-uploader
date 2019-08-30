import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UploadIcon from "../assets/upload.svg";
import { addFile } from "../redux/actions";
class UploadButton extends Component {
  constructor() {
    super({});

    this.inputOpenFileRef = React.createRef();
  }

  showOpenFileDlg() {
    this.inputOpenFileRef.current.click();
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    let file = event.target.files[0];

    let document = {
      file,
      metadata: {
        name: file.name,
        type: file.type
      }
    };

    this.props.addFile(document);
  }

  render() {
    return (
      <div className="upload-button-wrapper">
        <input
          ref={this.inputOpenFileRef}
          type="file"
          style={{ display: "none" }}
          onChange={this.onChangeFile.bind(this)}
        />
        <button
          className="upload-button"
          onClick={this.showOpenFileDlg.bind(this)}
        >
          <span className="upload-icon">
            <UploadIcon />
          </span>

          <span className="label">Upload Files</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addFile: bindActionCreators(addFile, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
