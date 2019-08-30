import React from "react";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo" src={require("../assets/logo.png")}></img>
    </div>
  );
};

export default Logo;
