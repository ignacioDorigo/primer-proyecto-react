import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Carro from "../Carro/Carro";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo></Logo>
        <Carro></Carro>
      </nav>
    );
  }
}
