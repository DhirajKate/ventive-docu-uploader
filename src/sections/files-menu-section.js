import React, { Component } from 'react';
import { MenuItem } from '../components';

class FilesMenuSection extends Component {
    render() {
        return (
            <div>
                <h1 className='menu-header'>
                    Files
                </h1>
                <MenuItem/>
            </div>
        );
    }
}

export default FilesMenuSection;