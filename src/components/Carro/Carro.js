import React, { Component } from "react";
import "./Carro.css";
import { FaShoppingCart } from "react-icons/fa";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
import DetallesCarro from "../DetallesCarro/DetallesCarro";

export default class Carro extends Component {
  render() {
    const calcularCantidadProductos = (carro) => {
      let cantidad = 0;
      for (const producto of carro) {
        cantidad = cantidad + producto.cantidad;
      }
      return cantidad;
    };

    const { carro, mostrarOcultarCarro, carroVisible,eliminarDelCarro } = this.props;
    return (
      <div className="div__carro">
        <button className="carro" onClick={mostrarOcultarCarro}>
          <FaShoppingCart
            className="carro__svg"
            size={"1.2rem"}
          ></FaShoppingCart>
        </button>

        {carroVisible ? (
          <DetallesCarro carro={carro} eliminarDelCarro={eliminarDelCarro}></DetallesCarro>
        ) : (
          <div>
            <BubbleAlert
              cantidad={calcularCantidadProductos(carro)}
            ></BubbleAlert>
          </div>
        )}
      </div>
    );
  }
}
