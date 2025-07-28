import React, { Component } from "react";
import "./Producto.css";
import Button from "../Button/Button";

export default class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div className="producto">
        <img className="producto__img" src={producto.img} alt={producto.nombre}></img>
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <Button agregarAlCarro={()=>agregarAlCarro(producto)}>Agregar</Button>
      </div>
    );
  }
}
