import React, { Component } from "react";
import Productos from "./components/Productos/Productos";

export default class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", precio: 1500, img: "/productos/tomate.jpg" },
      { nombre: "Lechuga", precio: 2500, img: "/productos/lechuga.jpg" },
      { nombre: "Arbejas", precio: 3500, img: "/productos/arbejas.jpg" },
    ],
  };

  render() {
    const agregarAlCarro = (producto) => {
      console.log(producto)
    }
    return (
      <div>
        <Productos
          agregarAlCarro={agregarAlCarro}
          productos={this.state.productos}
        ></Productos>
      </div>
    );
  }
}
