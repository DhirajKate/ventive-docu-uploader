import React, { Component } from 'react';
import DocumentIcon from '../assets/document-icon.svg'
class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item">
                <DocumentIcon/>
                <div className='menu-title'>
                    <span>{this.props.document.name}</span>
                    <span className="sub-title">{this.props.document.type}</span>
                </div>
            </div>
        );
    }
}

export default MenuItem;