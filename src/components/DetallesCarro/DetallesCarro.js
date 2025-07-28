import DetalleCarro from "../DetalleCarro/DetalleCarro";
import "./DetallesCarro.css";
import React, { Component } from "react";

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div className="detalles">
        {carro.map((producto, index) => (
          <DetalleCarro key={index} producto={producto}></DetalleCarro>
        ))}
      </div>
    );
  }
}

export default DetallesCarro;
