import React, { Component } from 'react';
import DocumentIcon from '../assets/document-icon.svg'
class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item">
                <DocumentIcon/>
                <div className='menu-title'>
                    <span>Document 01</span>
                    <span className="sub-title">Document 01</span>
                </div>
            </div>
        );
    }
}

export default MenuItem;