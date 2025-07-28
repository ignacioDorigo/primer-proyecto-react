import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo></Logo>
        <p>Carro</p>
      </nav>
    );
  }
}
