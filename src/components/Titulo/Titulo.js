import React, { Component } from "react";
import "./Titulo.css";

export default class Titulo extends Component {
  render() {

    return <h1 className="titulo">{this.props.children}</h1>;
  }
}
