import React, { Component } from "react";
import "./Carro.css";
import { FaShoppingCart } from "react-icons/fa";
import BubbleAlert from "../BubbleAlert/BubbleAlert";

export default class Carro extends Component {
  render() {
    
    const calcularCantidadProductos = (carro) => {
      let cantidad = 0;
      for (const producto of carro) {
        cantidad = cantidad + producto.cantidad;
      }
      return cantidad
    };

    const { carro } = this.props;
    return (
      <div className="div__carro">
        <button className="carro">
          <FaShoppingCart
            className="carro__svg"
            size={"1.2rem"}
          ></FaShoppingCart>
        </button>
        <div>
          <BubbleAlert cantidad={calcularCantidadProductos(carro)}></BubbleAlert>
        </div>
      </div>
    );
  }
}
