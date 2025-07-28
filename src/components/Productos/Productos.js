import React, { Component } from "react";
import Producto from "../Producto/Producto";
import "../Productos/Productos.css";

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;
    return (
      <div className="productos">
        {productos.map((producto, index) => (
          <Producto
            key={index}
            producto={producto}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    );
  }
}
