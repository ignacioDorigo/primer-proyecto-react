import React, { Component } from "react";
import Productos from "./components/Productos/Productos";
import Layout from "./components/Layout/Layout";
import Titulo from "./components/Titulo/Titulo";
import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", precio: 1500, img: "/productos/tomate.jpg" },
      { nombre: "Lechuga", precio: 2500, img: "/productos/lechuga.jpg" },
      { nombre: "Arbejas", precio: 3500, img: "/productos/arbejas.jpg" },
    ],
    carro: [],
    carroVisible: true,
  };

  render() {
    const mostrarOcultarCarro = () => {
      this.setState({ carroVisible: !this.state.carroVisible });
    };

    const agregarAlCarro = (producto) => {
      const carro = this.state.carro;
      const estaProducto = carro.find(
        (prod) => prod.nombre === producto.nombre
      );
      if (estaProducto) {
        // console.log("El producto esta");
        const nuevoCarro = carro.map((prod) => {
          if (prod.nombre === producto.nombre) {
            return { ...prod, cantidad: prod.cantidad + 1 };
          } else {
            return prod;
          }
        });
        this.setState({ carro: nuevoCarro });
      } else {
        // console.log("El producto no esta, hay que agregarlo");
        const nuevoItem = { ...producto, cantidad: 1 };
        const nuevoCarro = [...carro, nuevoItem];
        this.setState({ carro: nuevoCarro });
      }
    };
    console.log(this.state.carro);
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          mostrarOcultarCarro={mostrarOcultarCarro}
          carroVisible = {this.state.carroVisible}
        ></Navbar>
        <Layout>
          <Titulo>Tienda</Titulo>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={this.state.productos}
          ></Productos>
        </Layout>
      </div>
    );
  }
}
