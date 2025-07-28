import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Carro from "../Carro/Carro";

export default class Navbar extends Component {
  render() {
    const { carro, mostrarOcultarCarro, carroVisible } = this.props;
    return (
      <nav className="navbar">
        <Logo></Logo>
        <Carro
          carro={carro}
          mostrarOcultarCarro={mostrarOcultarCarro}
          carroVisible={carroVisible}
        ></Carro>
      </nav>
    );
  }
}
