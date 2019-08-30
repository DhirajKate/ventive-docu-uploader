import React, { Component } from 'react';
import UploadIcon from '../assets/upload.svg'
class UploadButton extends Component {
    render() {
        return (
            <div className='upload-button-wrapper'>
                <button className='upload-button'>
                <span className="upload-icon">
                <UploadIcon/>
                </span>
                
                <span className="label">Upload Files</span></button>
            </div>
        );
    }
}

export default UploadButton;