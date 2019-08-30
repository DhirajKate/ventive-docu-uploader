import React, { Component } from "react";
import UploadIcon from "../assets/upload.svg";
class UploadButton extends Component {
  constructor() {
    super({});

    this.inputOpenFileRef = React.createRef();
  }

  showOpenFileDlg() {
    this.inputOpenFileRef.current.click();
  }

  render() {
    return (
      <div className="upload-button-wrapper">
        <input
          ref={this.inputOpenFileRef}
          type="file"
          style={{ display: "none" }}
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

export default UploadButton;
