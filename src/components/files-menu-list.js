import React, { Component } from 'react';
import { MenuItem } from '.';

class FilesMenuList extends Component {
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

export default FilesMenuList;