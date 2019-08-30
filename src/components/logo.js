import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img className="logo" src={require('../assets/logo.png')}></img>
      </div>
    );
  }
}

export default Logo;
