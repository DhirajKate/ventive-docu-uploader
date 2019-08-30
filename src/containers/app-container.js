import React, { Component } from 'react';
import {LeftBar} from '../sections';
import {DocumentViewer} from '../sections';
import './index.scss';
import '../components/index.scss'
class AppContainer extends Component {
    render() {
        return (
            <div className="container">
               <LeftBar/>
               <DocumentViewer/>
            </div>
        );
    }
}

export default AppContainer;

