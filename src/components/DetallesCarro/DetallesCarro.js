import DetalleCarro from "../DetalleCarro/DetalleCarro";
import "./DetallesCarro.css";
import React, { Component } from "react";

class DetallesCarro extends Component {
  render() {
    const calcularTotal = (carro) => {
      let total = 0;
      for (const producto of carro) {
        total = total + producto.precio * producto.cantidad;
      }
      return total;
    };
    const { carro, eliminarDelCarro } = this.props;
    return (
      <div className="detalles">
        {carro.map((producto, index) => (
          <DetalleCarro
            key={index}
            producto={producto}
            eliminarDelCarro={eliminarDelCarro}
          ></DetalleCarro>
        ))}
        <div className="detalle__total">
          <p style={{ fontWeight: "bold" }}>Total</p>
          <p>${carro.length !== 0 ? calcularTotal(carro) : 0}</p>
        </div>
      </div>
    );
  }
}

export default DetallesCarro;
