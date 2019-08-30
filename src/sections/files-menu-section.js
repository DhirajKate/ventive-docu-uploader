import React, { Component } from 'react';
import { MenuItem } from '../components';

class FilesMenuSection extends Component {
    render() {
        return (
            <div>
                <h1 className='menu-header'>
                    Files
                </h1>
                {this.props.documentList.map(function(document,index){
                    return (
                        <MenuItem document={document} index={index}/>
                    )
                })}
                
            </div>
        );
    }
}

export default FilesMenuSection;