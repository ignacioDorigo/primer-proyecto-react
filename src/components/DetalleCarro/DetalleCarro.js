import "./DetalleCarro.css";
import React, { Component } from "react";

class DetalleCarro extends Component {
  render() {
    const { producto } = this.props;
    return (
      <div className="detalle">
        <img
          className="detalle__img"
          src={producto.img}
          alt={producto.nombre}
        ></img>
        <p className="detalle__nombre">{producto.nombre}</p>
        <p className="detalle__cantidad">{producto.cantidad}</p>
        <p className="detalle__precio">${producto.precio * producto.cantidad}</p>
      </div>
    );
  }
}

export default DetalleCarro;
