import React, { Component } from "react";
import "./BubbleAlert.css";

class BubbleAlert extends Component {
  render() {
    const asignarNumeroBurbuja = (cantidadProductos) => {
      if (cantidadProductos === 0) {
        return "";
      } else if (cantidadProductos <= 9) {
        return cantidadProductos;
      } else {
        return "9+";
      }
    };

    const { cantidad } = this.props;
    return cantidad === 0 ? (
      <></>
    ) : (
      <span className="bubbleAlert">{asignarNumeroBurbuja(cantidad)}</span>
    );
  }
}

export default BubbleAlert;
