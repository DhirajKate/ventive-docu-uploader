import React, { Component } from "react";
import { Provider } from "react-redux";
import "../components/index.scss";
import configureStore from "../redux/store";
import AppContainer from "./app-container";
import "./index.scss";
const store = configureStore();
class AppContainerProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default AppContainerProvider;
