import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import AppContainer from "./app-container";
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
