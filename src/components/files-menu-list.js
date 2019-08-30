import React, { Component } from 'react';
import { MenuItem } from '.';

class FilesMenuList extends Component {
    render() {
        return (
            <div className="menu-list-container">
                <h1 className='menu-header'>
                    Files
                </h1>
                <div className="menu-list">
                {this.props.documentList.map((document,index)=>{
                    return (
                        <MenuItem document={document} index={index} toggelNavbar={this.props.toggelNavbar}/>
                    )
                })}
                
                </div>
             
            </div>
        );
    }
}

export default FilesMenuList;