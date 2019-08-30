import React from "react";
import LogoImage from '../assets/logo.png'
const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img className="logo" src={LogoImage}></img>
    </div>
  );
};

export default Logo;
