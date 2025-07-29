import "./DetalleCarro.css";
import React, { Component } from "react";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

class DetalleCarro extends Component {
  render() {
    const mostrarModal = (producto) => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("¡Borrado!", "El elemento fue eliminado.", "success");
          eliminarDelCarro(producto);
        }
      });
    };
    const { producto, eliminarDelCarro } = this.props;
    return (
      <div className="detalle">
        <img
          className="detalle__img"
          src={producto.img}
          alt={producto.nombre}
        ></img>
        <p className="detalle__nombre">{producto.nombre}</p>
        <p className="detalle__cantidad">{producto.cantidad}</p>
        <p className="detalle__precio">
          ${producto.precio * producto.cantidad}
        </p>
        <MdCancel
          onClick={() => mostrarModal(producto)}
          className="detalle__cancelarSVG"
          size={"1.3rem"}
        />
      </div>
    );
  }
}

export default DetalleCarro;
