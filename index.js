import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainerProvider} from './src/containers';
import './global.scss'
ReactDOM.render(
  <AppContainerProvider/>,
  document.getElementById('app')
);